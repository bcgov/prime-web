import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { PrimeDataService } from '../../services/prime-data.service';
import { Site } from '../../models/sites.model';
import { Person } from '../../models/prime.models';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'prime-info-button',
  templateUrl: './user-info-button.component.html',
  styleUrls: ['./user-info-button.component.scss']
})
export class InfoButtonComponent implements OnInit {

  /** The objectId of the target to look up. Must correspond to a Person or a Site, otherwise an error will be thrown. */
  @Input() targetId: string;
  modalRef: BsModalRef;
  public target: Site | Person;
  public targetType: TargetType;
  public TargetTypeEnum: typeof TargetType = TargetType;
  public editable: boolean = false;

  @ViewChild('personModal') personModalRef: ElementRef
  @ViewChild('siteModal') siteModalRef: ElementRef

  /** Alias for `target` if an only if targetType=Person */
  public person: Person;
  /** Alias for `target` if an only if targetType=Site */
  public site: Site;

  constructor(private dataService: PrimeDataService, private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(event: Event, template){
    event.stopPropagation();
    if (!this.target){
      this.loadTarget(this.targetId)
    }
    this.modalRef = this.modalService.show(this.modalElementRef, {class: 'modal-lg'});
  }

  edit(){
    this.editable = true;
  }

  discard(){
    console.log('todo');
    // TODO: Store a copy of the model - on discard, revert to it.
    this.editable = false;
  }

  save(){
    console.log('todo');
    // TODO: Store copy of model (i.e. @Input() ) - on save, overwrite it.
    this.editable = false;
  }

  private loadTarget(objectId){
    this.target = this.lookupObjectId(this.targetId);

    if (Site.isSiteGuard(this.target)){
      this.targetType = TargetType.Site;
      this.site = this.target;
    }
    else {
      this.targetType = TargetType.Person;
      this.person = this.target;
    }
  }

  private lookupObjectId(objectId): Site | Person {
    let person = this.dataService.findPersonByObjectId(objectId);
    if (person) return person;
    let site = this.dataService.findSiteByObjectId(objectId);
    if (site) return site;

    throw "Unable to find objectId. Double check it's valid.";
  }

  private get modalElementRef(): ElementRef {
    if (this.targetType == TargetType.Person){
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
