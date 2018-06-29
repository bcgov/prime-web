import {Component, EventEmitter, OnDestroy, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {ApplEnrollmentRowComponent} from '../appl-enrollment-row/appl-enrollment-row.component';
import {ApplicantDataService} from '../../../../services/applicant-data.service';
import {EnrollmentStatus} from '../../../../models/enrollment-status.enum';
import {defaultViewSelector, EnrollmentList} from '../../../../core/enrollment-list/enrollment-list.class';
import {fadeIn} from '../../../../animations/animations';

@Component({
  selector: 'prime-enrollment-list',
  templateUrl: './appl-enrollment-list.component.html',
  styleUrls: ['./appl-enrollment-list.component.scss'],
  animations: [fadeIn]
})
export class ApplEnrollmentListComponent extends EnrollmentList implements OnInit, OnDestroy {

  @ViewChildren(ApplEnrollmentRowComponent) rowElements: QueryList<ApplEnrollmentRowComponent>;

  @Output() onCancel = new EventEmitter<boolean>();
  @Output() onSave = new EventEmitter<boolean>();

  public showSaveMessage: boolean = false;

  /* Flag to indicate that information page has been updated */
  public updated: boolean = false;

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
  }

  /* OnDestroy implementation */
  ngOnDestroy() {
    this.applicantDataService.enrollmentViewTypeSelector = defaultViewSelector;
  }

  // Abstract functions defined by derived class
  //Convert enum to iterable array
  get EnrollmentStatus() {
    const list = Object.keys(EnrollmentStatus);
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
    console.log('save data');
    this.showSaveMessage = true;
    this.onSave.emit(true);
  }

  // Cancel button clicked
  cancel() {
    console.log('cancel changes');
    this.onCancel.emit(true);
    this.reset();
  }

  // Updated information
  onChange() {
    console.log('Enrollment list - onchange');
    this.updated = true;
  }

  reset(){
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

