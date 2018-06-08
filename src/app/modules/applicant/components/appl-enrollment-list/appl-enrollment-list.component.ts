import {Component, Input, OnChanges, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ApplEnrollmentRowComponent, ApplEnrollmentRowItem} from '../appl-enrollment-row/appl-enrollment-row.component';
import {ApplicantDataService} from '../../../../services/applicant-data.service';
import {EnrollmentStatus} from '../../../../models/enrollment-status.enum';
import {defaultViewSelector, EnrollmentList} from '../../../../core/enrollment-list/enrollment-list.class';

@Component({
  selector: 'prime-enrollment-list',
  templateUrl: './appl-enrollment-list.component.html',
  styleUrls: ['./appl-enrollment-list.component.scss']
})
export class ApplEnrollmentListComponent extends EnrollmentList implements OnInit, OnDestroy {

  @ViewChildren(ApplEnrollmentRowComponent) rowElements: QueryList<ApplEnrollmentRowComponent>

  // Enrollment status for applicant
  private _enrollmentStatus: string [] = [
    EnrollmentStatus.Approved,
    EnrollmentStatus.Declined
  ];

  constructor(private applicantDataService: ApplicantDataService) {
    super();

    applicantDataService.$enrollmentViewType.subscribe(viewType => {
      this.viewTypeSelector = viewType;
      this.viewTypes(viewType);
    });
  }

  /* OnInit implementation */
  ngOnInit() {
    this.data = this.rowItems;
    console.log('OnInit (ApplEnrollmentListComponent): ' + this.data );
  }

  /* OnDestroy implementation */
  ngOnDestroy(){
    this.applicantDataService.enrollmentViewTypeSelector = defaultViewSelector;
  }

  // Abstract functions defined by derived class
  //Convert enum to iterable array
  get EnrollmentStatus() {
    return this._enrollmentStatus;
  }

  rowOpened(item: ApplEnrollmentRowComponent) {
    console.log('rowOpened', { item, rowElements: this.rowElements });
    this.rowElements.filter(x => x !== item)
      .map(x => x.closeRow());
  }

  search(phrase){
      // do nothing - TODO implement
  }

  // PRIVATE

  // NOTE: This doesn't work properly with search. Fine for prototype for now, but will need to be resolved in future.
  viewTypes(type){
    console.log('viewTypes: ' + type);
    if (type === defaultViewSelector){
      return this.data = this.rowItems;
    }

    this.deepSearch(expandableRow => {
      return expandableRow.status.includes(type);
    });
  }

  sort() {
    // Temporary solution for prototype before actual sorting is implemented.
    this.rowItems.reverse();
  }

}

