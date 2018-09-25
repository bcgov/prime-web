import {Component, Input, OnInit, QueryList, ViewChildren, ChangeDetectorRef, Output, EventEmitter} from '@angular/core';
import { EnrollmentRowItem } from '../../../verifier/components/enrollment-row/enrollment-row.component';
import { EnrollmentList, defaultViewSelector } from '../../../../core/enrollment-list/enrollment-list.class';
import { EnrollmentStatus } from '../../../../models/enrollment-status.enum';
import { ProvisionerRowComponent } from '../provisioner-row/provisioner-row.component';
import { ProvisionerRowItem } from '../provisioner-row/provisioner-row.component';
import { Site, SiteAccess,ProvisionedStatus } from '../../../../models/sites.model';
import { cloneDeep } from 'lodash';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { fadeIn } from '../../../../animations/animations';
import { Person } from '../../../../models/person.model';
import { OrganizationAccess } from '../../../../models/organization-access.model';

@Component({
  selector: 'prime-provisioner-list',
  templateUrl: './provisioner-list.component.html',
  styleUrls: ['./provisioner-list.component.scss'],
  animations: [fadeIn]
})
export class ProvisionerListComponent extends EnrollmentList implements OnInit {

  @Input() rowItems: ProvisionerRowItem[] = [];
  @Input() primaryType: 'User'|'Site' = 'User';

  @Output() change = new EventEmitter<boolean>(false);
  @Input() parentSite: Site;
  public showSaveMessage = false;
  public loadingSpinner = false;
  private _pendingUpdates: SiteAccess[] = [];

  @ViewChildren(ProvisionerRowComponent) rowElements: QueryList<ProvisionerRowComponent>;


  private _enrollmentStatus: string [] = [
    EnrollmentStatus.Approved,
    EnrollmentStatus.Declined,
    EnrollmentStatus.New,
  ];

  constructor(private dataService: PrimeDataService, private cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    if (this.rowItems){
      // this.data = this.rowItems;
      this.data = cloneDeep(this.rowItems);
      console.log('OnInit (ProvisionerListComponent): ', this.data );
    }
  }

  ngOnChanges(changes){
    if (this.rowItems && this.data && this.rowItems.length !== this.data.length){
      this.data = cloneDeep(this.rowItems);
    }
  }

  get EnrollmentStatus() {
    return this._enrollmentStatus;
  }

  onAddNewPerson(person: Person){
    console.log('onAddNewPerson', person);
    const sa = new SiteAccess();
    sa.site = this.parentSite;
    sa.person = person;
    person.siteAccess.push(sa);
    this.parentSite.siteAccess.push(sa);

    // For prototype, we simulate as if the user already has org selected    
    const orgs = this.dataService.findCollectionFromSite(this.parentSite);

    if (orgs.length){
      const org = orgs[0];
      const orgAccess = new OrganizationAccess(person, org);
      person.organizationAccess.push(orgAccess);
      org.organizationAccess.push(orgAccess);
      this.dataService.organizationAccess.push(orgAccess);
    }

    console.log('New Person created, associated with site')

    this.dataService.siteAccesses.push(sa);
  }

  rowOpened(item) {
    console.log('rowOpened', { item, rowElements: this.rowElements });
    this.rowElements.filter(x => x !== item)
      .map(x => x.closeRow());
  }

  cancel(){
    console.log('Cancel');
    this._pendingUpdates = [];

    // Revert to orig data
    this.data = cloneDeep( this.rowItems );
  }

  save(){
    console.log('Save!');
    this.loadingSpinner = true;

    setTimeout(() => {

      this._pendingUpdates.map(sa => {
        const orig: SiteAccess = this.dataService.findSiteAccessByObjectId(sa.objectId);
        this.updateSiteAccess(orig, sa);
      });

      this.loadingSpinner = false;
      this.showSaveMessage = true;
      // Update orig copy of data now that user has saved them.
      this.rowItems = cloneDeep(this.data);
      this._pendingUpdates = [];

    }, 3000);
  }

  onSiteAccessChange(item: SiteAccess){
    this.showSaveMessage = false; //Now there are pending unsaved changes, so hide message.
    const found = this._pendingUpdates.find(sa => sa.objectId === item.objectId);
    if (found){
      this.updateSiteAccess(found, item);
    } else {
      this._pendingUpdates.push(item);
    }
  }


  search(phrase){
    console.log('ProvisionerList SEARCH:', phrase);
  }

  viewTypes(type){
    if (type === defaultViewSelector){
      return this.data = this.rowItems;
    }

    this.deepSearch(expandableRow => {
      return expandableRow.status.includes(type);
    });
  }

  get updated(): boolean {
    return this._pendingUpdates.length >= 1 && !this.loadingSpinner;
  }

  private updateSiteAccess(target: SiteAccess, source: SiteAccess): SiteAccess {
  // target.provisionedStatus = ProvisionedStatus.Provisioning ;
    source.status = EnrollmentStatus.Provisioning ;
    target.status = EnrollmentStatus.Provisioning ;
    target.personalAccess = source.personalAccess;
    target.provisionedDate = source.provisionedDate;
    target.posUserId = source.posUserId;
    target.status = source.status;
    target.startDate = source.startDate ;
    target.endDate = source.endDate ;
    return target;
  }

}
