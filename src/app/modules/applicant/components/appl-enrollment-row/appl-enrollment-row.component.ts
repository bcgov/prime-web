import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EnrollmentRow, RowState} from '../../../../core/enrollment-row/enrollment-row.class';
import {loadInOut, openState, openStateChild, openStateDisable} from '../../../../animations/animations';
import {DeclinedReasons, SiteAccess} from '../../../../models/sites.model';
import {EnrollmentStatus} from '../../../../models/enrollment-status.enum';
import {SearchDomain} from '../../../../core/user-info-button/user-info-button.component';
import {isNullOrUndefined} from 'util';
import {cloneDeep} from 'lodash';

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
  @Output() onChange = new EventEmitter<ApplEnrollmentRowItem>();

  public applicantSearch: SearchDomain = SearchDomain.Applicant; // Domain to search for user sites
  public dateFormat = 'mmm. dd, yyyy';

  // copy of row data
  private _data;
  private _acceptedEnroll = false;
  private _declinedEnroll = false;

  constructor() {
    super();
  }

  ngOnInit() {
    if (this.rowData) {
      this._data = cloneDeep(this.rowData);
      return this.siteAccessRequiringAttention.map(x => x.open = false);
    }
  }

  onAccept() {
    this._acceptedEnroll = true;

    this.openRow();
  }

  onDecline() {
    this._declinedEnroll = true;
    this.openRow();
  }

  /**
   * Checks whether enrollment was accepted
   * @returns {boolean}
   */
  isAccepted(): boolean {
    this.siteAccessRequiringAttention.map( x => {
      if ( x.accessReason ) {
        this._acceptedEnroll = true;
        return x; }
    }).filter(x => x); //Remove undefined

    return this._acceptedEnroll;
  }

  /**
   * Checks whether enrollment was declined
   * @returns {boolean}
   */
  isDeclined(): boolean {
    this.siteAccessRequiringAttention.map( x => {
      if ( x.declinedReason ) {
        this._declinedEnroll = true;
        return x; }
    }).filter(x => x); //Remove undefined

    return this._declinedEnroll;
  }

  /**
   * Forward pending changes to parent component to track
   * @param {SiteAccess} item
   */
  pendingChanges( item: SiteAccess ) {

    // Changes that occur on the enrollment progress row
    this.siteAccessRequiringAttention[0].accessReason = item.accessReason;
    this.siteAccessRequiringAttention[0].declinedReason = item.declinedReason;

    // Send changes for this row
    this.onChange.emit( this.siteAccessRequiringAttention[0] );
  }

  /**
   * Get the possible reasons for declining the site access
   * @returns {any[]}
   */
  get declinedReasons() {
    const list = Object.keys(DeclinedReasons);
    return list.map( x => { return DeclinedReasons[x]; });
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
    this.siteAccessRequiringAttention[0].declinedReason = reason;

    // Send changes for this row
    this.onChange.emit( this.siteAccessRequiringAttention[0] );
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
    this.siteAccessRequiringAttention[0].endDate = endDt;

    // Send changes for this row
    this.onChange.emit( this.siteAccessRequiringAttention[0] );
  }

  shouldHideAcceptRejectControls(): boolean {

    if (this.isAccepted() || this.isDeclined() ){
      return true;
    }

    // For now don't hide Initiated or New. Not clear on what the difference between these two is, but we're honouring the distinction here.
    return !(this.isInitiatedStatus() || this.isNewStatus())
  }

  isNewStatus(): boolean {
    return this.filterStatus(x => x.status === EnrollmentStatus.New);
  }

  isDeclinedStatus(): boolean {
    return this.filterStatus(x => x.status === EnrollmentStatus.Declined);
  }

  isActiveStatus(): boolean {
    return this.filterStatus(x => x.status === EnrollmentStatus.Active);
  }

  isInitiatedStatus(): boolean {
    return this.filterStatus(x => x.status === EnrollmentStatus.Initiated);
  }

  isShowProgress(): boolean {
    return this.filterStatus(x => (x.status !== EnrollmentStatus.Expired && x.status !== EnrollmentStatus.Active));
  }

  filterStatus(fn: (sa: SiteAccess) => boolean    ){
    return this.siteAccessRequiringAttention.filter(fn).length !== 0;
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

  canOpen(): boolean{
    // return (this.isNewStatus() || this.isInitiatedStatus());
    return true;
    // // Don't open on New or Active rows, unless user has Accepted the New row
    // return this.rowData.expandableRows.filter(sa => {
    //   return (sa.status !== EnrollmentStatus.New && sa.status !== EnrollmentStatus.Active) || this._acceptedEnroll;
    // }).length >= 1;
  }
}

