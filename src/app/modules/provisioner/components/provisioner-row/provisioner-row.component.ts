import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Base} from '../../../../core/base/base.class';

import {DeclinedReasons, Site, SiteAccess, ProvisionedStatus, PersonalAccessType } from '../../../../models/sites.model';
import {loadInOut, openState, openStateChild, openStateDisable, growVertical} from '../../../../animations/animations';
import {EnrollmentStatus} from '../../../../models/enrollment-status.enum';
import {EnrollmentRowItem} from '../../../verifier/components/enrollment-row/enrollment-row.component';
import {PharmaNetOrganization} from "../../../../models/organizations.model";
import {CollegeTypes} from "../../../../models/colleges.enum";
import { EnrollmentRow, RowState } from '../../../../core/enrollment-row/enrollment-row.class';
import { cloneDeep } from 'lodash';

export interface ProvisionerRowItem {
  title: string;
  siteAccess: SiteAccess[];
  site?: Site[];
  associatedObjectId: string;
  collegeNumber?: string;
  licenceNumber?: string;
}

@Component({
  selector: 'prime-provisioner-row',
  templateUrl: './provisioner-row.component.html',
  styleUrls: ['./provisioner-row.component.scss'],
  animations: [openState, openStateChild, loadInOut, openStateDisable, growVertical]
})

export class ProvisionerRowComponent extends EnrollmentRow implements OnInit {

  @Input() rowData: ProvisionerRowItem;
  /** An unchanged copy of rowData on init, meant to track if user has made changes */
  private rowDataOnInit: ProvisionerRowItem;

  @Input() primaryType: 'User'|'Site';

  @Output() onRowOpened = new EventEmitter<any>();
  @Output() siteAccessChange = new EventEmitter<SiteAccess>();


  /** Force showing of the provisioner details row outside of the default business logic. This is used when clicking on the row; */
  public showProvisionerDetailsRowOverride: boolean = false;

  get siteAccessRequiringAttention(): any[] {
    if (!this.rowData) {
      return [];
    }
    return this.rowData.siteAccess;

  }

  get sites(): Site[] {
    if (!this.rowData) {
      return [];
    }

    return this.rowData.site;

  }


  siteName: string;
  siteNumber: String;
  siteStatus: string;
  siteAccessObject: SiteAccess;

  declinedReasonSelector = 'pleaseSelect';
  public accessType = Object.keys(PersonalAccessType);
  public provisionedStatusType = Object.keys(ProvisionedStatus);


  private _enrollmentStatus: string [] = [
    EnrollmentStatus.Active,
    EnrollmentStatus.Declined,
    EnrollmentStatus.New,
  ];

  constructor( ) {
    super();
  }

  ngOnInit() {    
    if (!this.rowData ) { return; }
    this.siteAccessObject  = this.rowData.siteAccess[0];
    this.siteStatus = this.siteAccessObject.status;
    //default value YES
    if ( this.primaryType==='User' && this.rowData.site) {
      this.rowData.site.map(site => {
        site.siteAccess[0].personalAccess  = ( site.siteAccess[0].personalAccess === undefined) ? PersonalAccessType.Yes : site.siteAccess[0].personalAccess  ;
        site.siteAccess[0].provisionedDate =  new Date();
      });
    }
    if ( this.primaryType==='Site' && this.rowData) {
      this.rowData.siteAccess[0].personalAccess  = ( this.rowData.siteAccess[0].personalAccess === undefined) ? PersonalAccessType.Yes : this.rowData.siteAccess[0].personalAccess  ;
      this.rowData.siteAccess[0].provisionedDate =  new Date();
    }
    this.rowDataOnInit = cloneDeep(this.rowData);
  }

  onChangeStartDate(ev , item:SiteAccess) {
    item.startDate = ev;
    this.siteAccessChange.emit(item);
  }
  onChangeEndDate(ev , item:SiteAccess) {
    item.endDate = ev;
    this.siteAccessChange.emit(item);
  }

  onChangeprovisionedDate(ev , item:SiteAccess) {
    item.provisionedDate = ev;
    this.siteAccessChange.emit(item);
  }

  getProvisionedStatus( item:SiteAccess) {
   return item.provisionedStatus ==ProvisionedStatus.PROVISIONED ? "PROVISIONED" :"NEW" ;
  }

  onChange(ev , item:SiteAccess){
    this.siteAccessChange.emit(item);
  }

  get title(): string {
    if (this.primaryType === 'User' ){
      const name = this.rowData.title;
      return 'Site ' + name.substring(name.lastIndexOf(' ') + 1);
    }
    else {
      //TODO
      return 'TITLE SITE';
    }
  }

  get orgName(): String {
    const name = this.rowData.title;
    return name;
  }

  getCollegeNumber(): string{
    if (this.primaryType !== 'Site') {
      // In current designs, we should NEVER care about college except for Site tables.
      return null;
    }
    if (!this.rowData.collegeNumber || this.rowData.collegeNumber.length === 0 || this.rowData.collegeNumber === 'pleaseSelect'){
      return 'n/a';
    }

    return CollegeTypes[this.rowData.collegeNumber];
  }

  getLicenceNumber(): string{
    if (this.primaryType !== 'Site') {
      // In current designs, we should NEVER care about college except for Site tables.
      return null;
    }
    if (!this.rowData.licenceNumber || this.rowData.licenceNumber.length === 0){
      return 'n/a';
    }

    return this.rowData.licenceNumber;
  }


  declinedReasonValue(selection) {
    return DeclinedReasons[selection];
  }

  get DeclinedReasons() {
    return Object.keys(DeclinedReasons);
  }

  declinedReasonCurrValue() {
    const selection = this.declinedReasonSelector;
    return DeclinedReasons[selection] ? DeclinedReasons[selection] : '';
  }

  private getRandomElFromArray<T>(arr: T[]): T {
    return arr[Math.ceil(Math.random() * arr.length) - 1];
  }

  toggleRow() {
    if (this.canOpen()) {
      this.openState = this.openState === RowState.Opened ? RowState.Closed : RowState.Opened;
      if (this.openState === RowState.Opened) {
        this.onRowOpened.emit(this);
      }
    }
    // Custom provisioner functionality: Also toggle visibility of the override row.
    this.showProvisionerDetailsRowOverride = !this.showProvisionerDetailsRowOverride;
  }

  closeRow() {
    this.openState = RowState.Closed;
  }


  canOpen() {
    return this.siteStatus === 'Declined';
  }


  accept() {
    this.siteStatus = 'AcceptEnrollment';
    this.siteAccessObject.provisionedDate = new Date();
    this.siteAccessObject.provisionedStatus = ProvisionedStatus.PROVISIONED;
    this.siteAccessObject.status = EnrollmentStatus.Active;
    this.siteAccessChange.emit(this.siteAccessObject);
  }

  reject(){
    this.siteStatus = 'DeclinedEnrollment';
    this.siteAccessObject.provisionedStatus = ProvisionedStatus.REJECTED;
    this.siteAccessObject.status = EnrollmentStatus.Declined;
    // this.rowData.siteAccess[0].status = EnrollmentStatus.Declined; //old
    this.siteAccessChange.emit(this.siteAccessObject)
  }

  // TODO - Replace SiteStatus with these calls
  get isAccepted(): boolean {
    return this.siteAccessObject.isProvisioned;
  }

  get isRejected(): boolean {
    return this.siteAccessObject.provisionedStatus === ProvisionedStatus.REJECTED;
  }

  get  isNew(): boolean {
    if (!this.siteAccessObject) return false;

    if (!(this.siteAccessObject.status === EnrollmentStatus.New || this.siteAccessObject.status === EnrollmentStatus.Provisioning)){
      return false;
    }

    if (!(this.siteAccessObject.provisionedStatus === ProvisionedStatus.NOT_PROVISIONED)) {
      return false;
    }

    return true;
    // return this.siteAccessObject.status === EnrollmentStatus.New && this.siteAccessObject.provisionedStatus === ProvisionedStatus.NOT_PROVISIONED;
  }



  // If the row was declined prior to any user action (on the page at this time)
  get isPreviouslyRejected(): boolean {
    // We need to check if it was 'rejected' at the time of component load.
    return this.rowDataOnInit.siteAccess[0].status === EnrollmentStatus.Declined;
  }


  goToNotePage(){
    console.log('todo');
  }
}


