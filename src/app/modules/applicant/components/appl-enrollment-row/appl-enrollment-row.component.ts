import {Component, Input, OnInit} from '@angular/core';
import {EnrollmentRow, EnrollmentRowChild, RowState} from '../../../../core/enrollment-row/enrollment-row.class';
import {loadInOut, openState, openStateChild, openStateDisable} from '../../../../animations/animations';
import {SiteAccess} from '../../../../models/sites.model';
import {Collection} from '../../../../models/collections.model';
import {Router} from '@angular/router';
import * as moment from 'moment';
import _date = moment.unitOfTime._date;
import {SimpleDate} from '../../../../core/date/simple-date.interface';
import {EnrollmentStatus} from '../../../../models/enrollment-status.enum';

// Specific to this component
export interface ApplEnrollmentRowItem {
  title: string;

  /** associatedObjectId and title both refer to the same underlying object. By
   * having an id, we can lookup from the EnrollmentRow -> item, e.g. when
   * navigating between pages */
  associatedObjectId: string;

  /** Optional and only used in one config. */
  collections?: Collection[];
  expandableRows?: SiteAccess[];
}

@Component({
  selector: 'prime-enrollment-row',
  templateUrl: './appl-enrollment-row.component.html',
  styleUrls: ['./appl-enrollment-row.component.scss'],
  animations: [openState, openStateChild, loadInOut, openStateDisable]
})
export class ApplEnrollmentRowComponent extends EnrollmentRow implements OnInit {

  @Input() rowData: ApplEnrollmentRowItem;

  constructor() {
    super();
  }

  ngOnInit() {
    if (!this.rowData) {
      return;
    }
    this.siteAccessRequiringAttention.map(x => x.open = false);
  }

  onAccept() {
    console.log('Accept enrollment');
  }

  onDecline() {
    console.log('Declined enrollment');
  }

  get startDate() {
    return this.siteAccessRequiringAttention.map(x => { return x.startDateShort; });
  }

  get endDate() {
    return this.siteAccessRequiringAttention.map(x => { return x.endDateShort; });
  }

  // Override functions
  canOpen(){
    console.log('my class canOpen');
    return super.canOpen();
  }

  get allChildAlerts() {
    console.log('my class allChildAlerts');
  //  let status = this.siteAccessRequiringAttention.map(x => { return x.status; } );

   // if ( EnrollmentStatus.New === status ) {}
    return this.siteAccessRequiringAttention.map(x => x.alert);
  }

  // abstract method - defined in derived
  /** This function is responsible for generating site access row titles depending on dashboard type */
  get siteAccessRequiringAttention(): any[] {

    if (!this.rowData || !this.rowData.expandableRows) {
      return [];
    }

    return this.rowData.expandableRows.map(siteAccess => {
      siteAccess.title = `${siteAccess.site.name}`;
      return siteAccess;
    });
  }
}

