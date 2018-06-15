import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EnrollmentRow} from '../../../../core/enrollment-row/enrollment-row.class';
import {loadInOut, openState, openStateChild, openStateDisable} from '../../../../animations/animations';
import {DeclinedReasons, SiteAccess} from '../../../../models/sites.model';
import {EnrollmentStatus} from '../../../../models/enrollment-status.enum';
import {SearchDomain} from '../../../../core/user-info-button/user-info-button.component';
import { cloneDeep } from 'lodash';

// Specific to this component
export interface ApplEnrollmentRowItem {
  title: string;

  /** associatedObjectId and title both refer to the same underlying object. By
   * having an id, we can lookup from the EnrollmentRow -> item, e.g. when
   * navigating between pages */
  associatedObjectId: string;

  /** Optional and only used in one config. */
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

  public acceptedEnroll: boolean = false;

  public applicantSearch: SearchDomain = SearchDomain.Applicant; // Domain to search for user sites

  public declinedReasonSelector: string = 'Please Select';

  private _data: ApplEnrollmentRowItem;

  constructor() {
    super();
  }

  ngOnInit() {
    if (!this.rowData) {
      return;
    }

    //Clone data - new enrollments may have changes
    this._data = cloneDeep(this.rowData);
    this.acceptedEnroll = false;
    this.siteAccessRequiringAttention.map(x => x.open = false);
  }

  // onAccept and OnDecline
  onAccept() {
    console.log('Accept enrollment');
    this.acceptedEnroll = true;
  }

  onDeclined() {
    console.log('Declined enrollment');
  }

  onProgressChange( $event ){
    console.log('onProgressChange');
  }

  get declinedReasons() {
    return [
      DeclinedReasons.WRONG_SITE,
      DeclinedReasons.ACCESS_NO_lONGER_REQUIRED
    ];
  }

  get hasDeclinedReason() {
    return this.siteAccessRequiringAttention.filter(x =>  x.declinedReason ).length !== 0;
  }

  get userDeclinedReason() {
    return this.siteAccessRequiringAttention.map(x => {
      return x.declinedReason;
    });
  }

  get startDate() {
    return this.siteAccessRequiringAttention.map(x => { return x.startDateShort; });
  }

  get endDate() {
    return this.siteAccessRequiringAttention.map(x => { return x.endDateShort; });
  }

  isNewEnrol() {
    return this.siteAccessRequiringAttention.filter(x => {
      return x.status === EnrollmentStatus.New;
    }).length !== 0;
  }

  isDeclinedEnrol() {
    return this.siteAccessRequiringAttention.filter(x => {
      return x.status === EnrollmentStatus.Declined;
    }).length !== 0;
  }

  // abstract method - defined in derived
  /** This function is responsible for generating site access row titles depending on dashboard type */
  get siteAccessRequiringAttention(): any[] {

    if (!this._data || !this._data.expandableRows) {
      return [];
    }

    return this._data.expandableRows.map(siteAccess => {
      siteAccess.title = `${siteAccess.site.name}`;
      return siteAccess;
    });
  }
}

