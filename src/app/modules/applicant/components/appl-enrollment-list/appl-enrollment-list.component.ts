import {Component, EventEmitter, OnDestroy, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {ApplEnrollmentRowComponent, ApplEnrollmentRowItem} from '../appl-enrollment-row/appl-enrollment-row.component';
import {ApplicantDataService} from '../../../../services/applicant-data.service';
import {EnrollmentStatus} from '../../../../models/enrollment-status.enum';
import {defaultViewSelector, EnrollmentList} from '../../../../core/enrollment-list/enrollment-list.class';
import {fadeIn} from '../../../../animations/animations';
import { cloneDeep } from 'lodash';
import {SiteAccess, SiteAccessProgressSteps} from '../../../../models/sites.model';

@Component({
  selector: 'prime-enrollment-list',
  templateUrl: './appl-enrollment-list.component.html',
  styleUrls: ['./appl-enrollment-list.component.scss'],
  animations: [fadeIn]
})
export class ApplEnrollmentListComponent extends EnrollmentList implements OnInit, OnDestroy {

  @ViewChildren(ApplEnrollmentRowComponent) rowElements: QueryList<ApplEnrollmentRowComponent>;
  @Output() onSave = new EventEmitter<SiteAccess[]>();

  public showSaveMessage = false;
  public loadingSpinner = false;

  /* Flag to indicate that information page has been updated */
  public updated = false;

  // List of Pending updates
  private _pendingUpdates: SiteAccess[] = [];

  constructor(private applicantDataService: ApplicantDataService) {
    super();

    applicantDataService.$enrollmentViewType.subscribe(viewType => {
      this.viewTypeSelector = viewType;
      this.viewTypes(viewType);
    });
  }

  /* OnInit implementation */
  ngOnInit() {
    if (this.rowItems) {
      this.data = cloneDeep( this.rowItems );
    }
  }

  /* OnDestroy implementation */
  ngOnDestroy() {
    this.applicantDataService.enrollmentViewTypeSelector = defaultViewSelector;
  }

  // Abstract functions defined by derived class
  //Convert enum to iterable array
  get EnrollmentStatus() {
    const allCurrentStatuses = this.data
      .filter(x => x.expandableRows.length)
      .map(x => x.expandableRows[0].status);

    // Only show statues that are in the currently displayed list in the table
    const list = Object.keys( EnrollmentStatus ).filter(status => {
      return allCurrentStatuses.indexOf(status) !== -1;
    })
    return list.map( x => {return EnrollmentStatus[x]; });
  }

  rowOpened(item: ApplEnrollmentRowComponent) {
    this.rowElements.filter(x => x !== item)
      .map(x => x.closeRow());
  }

  search(phrase) {
    this.deepSearch(phrase);
  }

  // Save button clicked
  save() {
    this.loadingSpinner = true;
    setTimeout(() => {
      this.loadingSpinner = false;
      this.showSaveMessage = true;

      // Change status to 'Provisioning' or 'Declined' based on user action
      this._pendingUpdates = this._pendingUpdates.map(sa => {
        if (sa.declinedReason){
          sa.status = EnrollmentStatus.Declined;
        } else if (sa.accessReason){
          sa.status = EnrollmentStatus.Provisioning;
          sa.progress = SiteAccessProgressSteps.Provisioner;
        }
        return sa;
      })

      // Close the row but only after updating the UI so user can see the animated change
      setTimeout( () => {
        this.rowElements.map(x => x.closeRow());
      }, 300)

      this.onSave.emit( this._pendingUpdates ); //Send list of updates
    }, 3000)

    this.updated = false;
    this.rowItems = cloneDeep( this.data );
  }

  // Cancel button clicked
  cancel() {
    this.updated = false;

    // Clear pending update list
    while (this._pendingUpdates.length > 0) {
      this._pendingUpdates.pop();
    }

    // Restore original values
    this.data = cloneDeep( this.rowItems );
  }

  /**
   * Record changes in a list
   * @param {ApplEnrollmentRowItem} item
   */
  onChange( item: SiteAccess ) {
    const obj = this._pendingUpdates.find(sa => sa.objectId === item.objectId);
    if (obj) {
      // Update possible fields that could change
      obj.accessReason = item.accessReason;
      obj.declinedReason = item.declinedReason;
      obj.endDate = item.endDate;
    } else {
      // Add to the list
      this._pendingUpdates.push( item );
    }

    this.updated = true;
    this.showSaveMessage = false;
  }

  // PRIVATE

  // NOTE: This doesn't work properly with search. Fine for prototype for now, but will need to be resolved in future.
  viewTypes(type){

    if (type === defaultViewSelector){
      return this.data = this.rowItems;
    }

    this.deepSearch(expandableRow => {
      return expandableRow.status.includes(type);
    });
  }

}

