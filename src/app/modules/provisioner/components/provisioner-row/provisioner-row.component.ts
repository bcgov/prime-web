import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Base} from '../../../../core/base/base.class';

import {DeclinedReasons, Site, SiteAccess} from '../../../../models/sites.model';
import {loadInOut, openState, openStateChild, openStateDisable} from '../../../../animations/animations';
import {EnrollmentStatus} from '../../../../models/enrollment-status.enum';
import {EnrollmentRowItem} from '../../../verifier/components/enrollment-row/enrollment-row.component';
import {Collection} from "../../../../models/collections.model";
import {CollegeTypes} from "../../../../models/colleges.enum";

export interface ProvisionerRowItem {
  title: string;
  siteAccess: SiteAccess[];
  site?: Site;
  associatedObjectId: string;
  collegeNumber?: string;
  licenseNumber?: string;
}

@Component({
  selector: 'prime-provisioner-row',
  templateUrl: './provisioner-row.component.html',
  styleUrls: ['./provisioner-row.component.scss'],
  animations: [openState, openStateChild, loadInOut, openStateDisable]
})

export class ProvisionerRowComponent extends Base implements OnInit {

  // TODO - Restore interface!
  // @Input() rowData: any;
  @Input() rowData: ProvisionerRowItem;S


  @Input() primaryType: 'User'|'Site';

  @Output() onRowOpened = new EventEmitter<any>();
  openState: String = 'closed';

  siteName: string;
  siteNumber: String;
  siteStatus: string;
  siteAccessObject: SiteAccess;

  declinedReasonSelector = 'pleaseSelect';


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
    console.log('ngOnInit get row data is ' , this.rowData);

    // Note - this part handles the "By Site" and "By User" layouts, how they can have different inputs. Merge if possible.
    // Assumes 1 enrollment per site.
    // if (this.rowData.sites){
    //   this.siteAccessObject = this.rowData.sites[0].siteAccess[0];
    // }
    // else {
    //   this.siteAccessObject  = this.rowData.siteAccess[0];
    // }
    this.siteAccessObject  = this.rowData.siteAccess[0];
    this.siteStatus = this.siteAccessObject.status;
  }

  get title(): string {
    if (this.primaryType === 'User' ){
      const name = this.rowData.site.name;
      return 'Site ' + name.substring(name.lastIndexOf(' ') + 1);
    }
    else {
      return 'TITLE SITE';
    }
  }

  get orgName(): String {
    const name = this.rowData.site.name;
    return name.substring(0, name.lastIndexOf(' ') - 1);
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

  getLicenseNumber(): string{
    if (this.primaryType !== 'Site') {
      // In current designs, we should NEVER care about college except for Site tables.
      return null;
    }
    if (!this.rowData.licenseNumber || this.rowData.licenseNumber.length === 0){
      return 'n/a';
    }

    return this.rowData.licenseNumber;
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
      this.openState = this.openState === 'opened' ? 'closed' : 'opened';
      if (this.openState === 'opened') {
        this.onRowOpened.emit(this);
      }
    }
  }

  closeRow() {
    this.openState = 'closed';
  }


  canOpen() {
    return this.siteStatus === 'Declined';
  }


  accept() {
    this.siteStatus = 'AcceptEnrollment';
    //Status stays New, no need to change
    //this.rowData.siteAccess[0].status = EnrollmentStatus.
  }

  reject(){
    this.siteStatus = 'DeclinedEnrollment';
    this.rowData.siteAccess[0].status = EnrollmentStatus.Declined;
  }

  // TODO: Likely wrong and needs to work for 'Site' and 'User!'
  // // TODO: Why can't we get SiteAccess obj directly? from dataService? look at the byuser approach and get that sorted first, then circle back to kyle
  // get siteAccess(): SiteAccess{
  //   return this.rowData.sites[0].siteAccess[0];
  // }

  goToNotePage(){
    console.log('todo');
  }
}


