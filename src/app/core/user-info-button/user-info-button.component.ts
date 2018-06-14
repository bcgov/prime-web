import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { PrimeDataService } from '../../services/prime-data.service';
import { Site } from '../../models/sites.model';
import { Person } from '../../models/person.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { cloneDeep } from 'lodash';
import { growHorizontal } from '../../animations/animations';
import { Collection } from '../../models/collections.model';


// Enum for domains
export enum SearchDomain {
  Default = 'default',
  Applicant = 'applicant',
  Site = 'site',
  Users = 'users'
}

@Component({
  selector: 'prime-info-button',
  templateUrl: './user-info-button.component.html',
  styleUrls: ['./user-info-button.component.scss'],
  animations: [growHorizontal]
})
export class InfoButtonComponent implements OnInit {

  /** The objectId of the target to look up. Must correspond to a Person or a Site, otherwise an error will be thrown. */
  @Input() targetId: string;
  @Input() searchDomain: string = SearchDomain.Default;

  modalRef: BsModalRef;
  public target: Site | Person;
  public targetType: TargetType;
  public TargetTypeEnum: typeof TargetType = TargetType;
  public editable = false;

  @ViewChild('personModal') personModalRef: ElementRef;
  @ViewChild('siteModal') siteModalRef: ElementRef;

  /**
   * A clone of the "real" object in the dataservice, is set if an only if
   * targetType=Person.
   */
  public person: Person;
  /**
   * A clone of the "real" object in the dataservice, is set if an only if
   * targetType=Site.
   */
  public site: Site;

  /**
   * Only for use in the siteModal. It is NOT a clone, but the actual object,
   * which is fine for now because there's no editting of the collection object.
   * If you find yourself changing the properties of the collection, stop, and
   * make it a clone of the orignal and update the original in the save()
   * function as appropriate.
   *
   * @readonly
   * @type {Collection}
   * @memberof InfoButtonComponent
   */
  get collection(): Collection {
    if (!this.site){
      throw new Error('Cannot access Collection before having Site defined');
    }

    // For now, we assume there's only one collection for the site. May need to
    // change in future if there are multiple collections per site.
    return this.dataService.findCollectionFromSite(this.site)[0];
  }

  constructor(private dataService: PrimeDataService, private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(event: Event){
    event.stopPropagation();
    if (!this.target){
      this.loadTarget(this.targetId);
    }
    this.modalRef = this.modalService.show(this.modalElementRef, {class: 'modal-lg'});
  }

  edit(){
    this.editable = true;
  }

  discard(){
    const restore = this.lookupObjectId(this.target.objectId);
    if (!Site.isSiteGuard(restore)){
      this.person = restore;
    }
    else {
      this.site = restore;
    }
    this.shouldShowreasonForDeactivation = [];
    this.doneEditting();
  }

  save(){
    // The original object we want to update
    const source = this.lookupObjectId(this.target.objectId);

    if (!Site.isSiteGuard(source)){
      source.name = this.person.name;
      source.dateOfBirth = this.person.dateOfBirth;
      source.phone = this.person.phone;
      source.renewalDate = this.person.renewalDate;
      source.address.postal = this.person.address.postal;
      source.siteAccess = this.person.siteAccess;
    }
    else {
      source.vendor = this.site.vendor;
      source.address.street = this.site.address.street;
      source.siteType = this.site.siteType;
    }

    this.doneEditting();
  }

  doneEditting(){
    this.editable = false;
    this.loadTarget(this.target.objectId);
  }

  public shouldShowreasonForDeactivation: boolean[] = [];
  onSetEndDate(evt: Date, siteAccess){
    this.shouldShowreasonForDeactivation[siteAccess.objectId] = !!evt;
    siteAccess.endDate = evt;
  }

  public isApplicantSite(): boolean {
    return  SearchDomain.Applicant === this.searchDomain;
  }

  changeSite(siteObjectId, event){
    this.loadTarget(siteObjectId);
  }

  private loadTarget(objectId){
    this.target = this.lookupObjectId(objectId);

    if (Site.isSiteGuard(this.target)){
      this.targetType = TargetType.Site;
      this.site = cloneDeep(this.target);
    }
    else {
      this.targetType = TargetType.Person;
      this.person = cloneDeep(this.target);
    }
  }

  private lookupObjectId(objectId): Site | Person {

    console.log('Using search domain: ' + this.searchDomain);
    switch (this.searchDomain ) {
      case SearchDomain.Applicant:
        console.log('Search person domain');
        const userSite = this.dataService.findUserSiteByObjectId(objectId);
        if (userSite) {
          console.log('returning site', userSite);
          return userSite; }
        break;

      case SearchDomain.Default:
      case SearchDomain.Site:
      case SearchDomain.Users:
        const person = this.dataService.findPersonByObjectId(objectId);
        if (person) { return person; }
        const site = this.dataService.findSiteByObjectId(objectId);
        if (site) { return site; }
        const collection = this.dataService.findCollectionByObjectId(objectId);
        if (collection) { return collection.members[0]; }
        break;
    }

    throw new Error('Unable to find objectId. Double check it\'s valid.');
  }

  private get modalElementRef(): ElementRef {
    if (this.targetType === TargetType.Person){
      return this.personModalRef;
    }
    else {
      return this.siteModalRef;
    }
  }

}

enum TargetType {
  Site,
  Person
}
