import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
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

  @ViewChildren(ApplEnrollmentRowComponent) rowElements: QueryList<ApplEnrollmentRowComponent>;

  @Output() onCancel = new EventEmitter<boolean>();
  @Output() onSave = new EventEmitter<boolean>();

  /* Flag to indicate that information page has been updated */
  public updated: boolean;

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
    this.updated = false;
  }

  /* OnDestroy implementation */
  ngOnDestroy() {
    this.applicantDataService.enrollmentViewTypeSelector = defaultViewSelector;
  }

  // Abstract functions defined by derived class
  //Convert enum to iterable array
  get EnrollmentStatus() {
    return [
      EnrollmentStatus.Approved,
      EnrollmentStatus.Declined
    ];
  }

  rowOpened(item: ApplEnrollmentRowComponent) {
    console.log('rowOpened');
    this.rowElements.filter(x => x !== item)
      .map(x => x.closeRow());
  }

  search(phrase) {
    console.log( 'search');
  }

  // Save button clicked
  save() {
    console.log('save data');
    this.onSave.emit(true);
    this.updated = true;
  }

  // Cancel button clicked
  cancel() {
    console.log('cancel changes');
    this.onCancel.emit(true);
  }

  // Updated information
  onChange() {
    console.log('Enrollment list - onchange');
    this.updated = true;
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

