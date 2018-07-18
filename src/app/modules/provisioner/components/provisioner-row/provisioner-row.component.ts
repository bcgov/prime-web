import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Base} from '../../../../core/base/base.class';

import {DeclinedReasons, Site, SiteAccess} from '../../../../models/sites.model';
import {loadInOut, openState, openStateChild, openStateDisable} from '../../../../animations/animations';
import {EnrollmentStatus} from '../../../../models/enrollment-status.enum';
import {EnrollmentRowItem} from '../../../verifier/components/enrollment-row/enrollment-row.component';
import {Collection} from "../../../../models/collections.model";

export interface ProvisionerRowItem {
  title: string;
  siteAccess: SiteAccess;
  extraRow: object;
  associatedObjectId: string;
}

@Component({
  selector: 'prime-provisioner-row',
  templateUrl: './provisioner-row.component.html',
  styleUrls: ['./provisioner-row.component.scss'],
  animations: [openState, openStateChild, loadInOut, openStateDisable]
})

export class ProvisionerRowComponent extends Base implements OnInit {

  @Input() rowData: ProvisionerRowItem;
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
    super()
  }

  ngOnInit() {
    if (!this.rowData ) {return};
    console.log('ngOnInit get row data is ' , this.rowData);

    //const name = this.rowData.title;
    //this.collegeId = this.rowData.collegeId;
    this.siteAccessObject = this.rowData.siteAccess;
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


  accept() {
    this.siteStatus = 'AcceptEnrollment';
    //Status stays New, no need to change
    //this.rowData.siteAccess[0].status = EnrollmentStatus.
  }

  reject(){
    this.siteStatus = 'DeclinedEnrollment';
    this.rowData.siteAccess[0].status = EnrollmentStatus.Declined;
  }
}


