import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Base} from '../../../../core/base/base.class';

import {DeclinedReasons, EnrollmentAlert, Site, SiteAccess} from '../../../../models/sites.model';
import {loadInOut, openState, openStateChild, openStateDisable} from '../../../../animations/animations';
import {EnrollmentStatus} from '../../../../models/enrollment-status.enum';


@Component({
  selector: 'prime-provisioner-row',
  templateUrl: './provisioner-row.component.html',
  styleUrls: ['./provisioner-row.component.scss'],
  animations: [openState, openStateChild, loadInOut, openStateDisable]
})
export class ProvisionerRowComponent extends Base implements OnInit {

  @Input() rowData: Site;
  @Input() primaryType: 'User'|'Site'= 'Site';

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
    super()
  }

  ngOnInit() {
    if (!this.rowData ) {return}
    const name =   this.rowData.name;
    this.siteName = name.substring(0, name.lastIndexOf(' ') - 1);
    this.siteNumber = 'Site ' + name.substring(name.lastIndexOf(' ') + 1);
    // console.log(' site is ', this.rowData);

    this.siteAccessObject = this.rowData.siteAccess[0];
    this.siteStatus = this.siteAccessObject.status;
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

  resetStatus(newStatus) {
    return this.siteStatus = newStatus;
  }

  accept() {
    this.siteStatus = 'AcceptEnrollment';
    //Status stays New, no need to change
    // this.rowData.siteAccess[0].status = EnrollmentStatus.
  }

  reject(){
    this.siteStatus = 'DeclinedEnrollment';
    this.rowData.siteAccess[0].status = EnrollmentStatus.Declined;
  }
}


