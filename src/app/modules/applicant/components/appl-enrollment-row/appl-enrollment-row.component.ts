import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EnrollmentRow} from '../../../../core/enrollment-row/enrollment-row.class';
import {loadInOut, openState, openStateChild, openStateDisable} from '../../../../animations/animations';
import {DeclinedReasons, SiteAccess} from '../../../../models/sites.model';
import {EnrollmentStatus} from '../../../../models/enrollment-status.enum';
import {SearchDomain} from '../../../../core/user-info-button/user-info-button.component';
import {isNullOrUndefined} from "util";

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
  selector: 'prime-appl-enrollment-row',
  templateUrl: './appl-enrollment-row.component.html',
  styleUrls: ['./appl-enrollment-row.component.scss'],
  animations: [openState, openStateChild, loadInOut, openStateDisable]
})
export class ApplEnrollmentRowComponent extends EnrollmentRow implements OnInit {

  @Input() rowData: ApplEnrollmentRowItem;
  @Output() onChange = new EventEmitter<boolean>();

  public acceptedEnroll = false;
  public declinedEnroll = false;
  public applicantSearch: SearchDomain = SearchDomain.Applicant; // Domain to search for user sites
  public dateFormat = 'yyyy/mm/dd';

  constructor() {
    super();
  }

  ngOnInit() {
    if (!this.rowData) {
      return;
    }
    return this.siteAccessRequiringAttention.map(x => x.open = false);
  }

  onAccept() {
    console.log('Accept enrollment');
    this.acceptedEnroll = true;
    this.onChange.emit(true);
  }

  onDecline() {
    console.log('Declined enrollment');
    this.declinedEnroll = true;
    this.onChange.emit(true);
  }

  pendingChanges( item: SiteAccess ) {
    console.log( 'Pending Change: ', item );
    const access = this.rowData.expandableRows.find(sa => sa.objectId === item.objectId);
    access.accessReason = item.accessReason;
  }

  /**
   * Get the possible reasons for declining the site access
   * @returns {any[]}
   */
  get declinedReasons() {
    const list = Object.keys(DeclinedReasons);
    return list.map( x => {return DeclinedReasons[x]; });
  }

  /**
   * Get the reason why access was declined
   * @returns {string}
   */
  get declinedReason(): string {

    if (isNullOrUndefined( this.siteAccessRequiringAttention[0].declinedReason ) ||
        0 === this.siteAccessRequiringAttention[0].declinedReason.length ) {
      return 'Please Select';
    }
    return this.siteAccessRequiringAttention[0].declinedReason;
  }

  set declinedReason( reason: string ) {
    this.siteAccessRequiringAttention[0].pendingChanges = true;
    this.siteAccessRequiringAttention[0].declinedReason = reason;
  }

  get startDate(): Date {
    return this.siteAccessRequiringAttention[0].startDate;
  }

  set startDate( startDt: Date ) {
    this.siteAccessRequiringAttention[0].startDate = startDt;
  }

  get endDate(): Date {
    return this.siteAccessRequiringAttention[0].endDate;
  }

  set endDate( endDt: Date ) {
    this.siteAccessRequiringAttention[0].pendingChanges = true;
    this.siteAccessRequiringAttention[0].endDate = endDt;
  }

  isNewEnrol(): boolean {
    return this.siteAccessRequiringAttention.filter(x => {
      return x.status === EnrollmentStatus.New;
    }).length !== 0;
  }

  isDeclinedEnrol(): boolean {
    return this.siteAccessRequiringAttention.filter(x => {
      return x.status === EnrollmentStatus.Declined;
    }).length !== 0;
  }

  isActive(): boolean {
    return this.siteAccessRequiringAttention.filter(x => {
      return x.status === EnrollmentStatus.Active;
    }).length !== 0;
  }

  isShowProgress(): boolean {
    return this.siteAccessRequiringAttention.filter(x => {
      return (x.status !== EnrollmentStatus.Expired && x.status !== EnrollmentStatus.Active);
    }).length !== 0;
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

  canOpen(): boolean{
    // Don't open on New or Active rows, unless user has Accepted the New row
    return this.rowData.expandableRows.filter(sa => {
      return (sa.status !== EnrollmentStatus.New && sa.status !== EnrollmentStatus.Active) || this.acceptedEnroll
    }).length >= 1;
  }
}

