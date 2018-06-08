import {Component, Input, OnChanges, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Base} from '../../../../core/base/base.class';
import {ApplEnrollmentRowItem} from '../appl-enrollment-row/appl-enrollment-row.interface';
import {ApplEnrollmentRowComponent} from '../appl-enrollment-row/appl-enrollment-row.component';
import {ApplicantDataService} from '../../../../services/applicant-data.service';
import {SiteAccess} from '../../../../models/sites.model';
import {EnrollmentStatus} from '../../../../models/enrollment-status.enum';

// Define for constant string
export const defaultViewSelector = 'View All';

@Component({
  selector: 'prime-appl-enrollment-list',
  templateUrl: './appl-enrollment-list.component.html',
  styleUrls: ['./appl-enrollment-list.component.scss']
})
export class ApplEnrollmentListComponent extends Base implements OnInit, OnDestroy, OnChanges {

  @Input() rowItems: ApplEnrollmentRowItem[];
  @ViewChildren(ApplEnrollmentRowComponent) rowElements: QueryList<ApplEnrollmentRowComponent>
  /** Internal representation of data used in for loops. Can be filtered by search. */
  public data: ApplEnrollmentRowItem[];

  // Enrollment status for applicant
  private _applEnrollmentStatus: string [] = [
    EnrollmentStatus.Approved,
    EnrollmentStatus.Declined
  ];

  // Valid values: EnrollmentStatus enums + "All"
  public viewTypeSelector  = defaultViewSelector;

  //Convert enum to iterable array
  get EnrollmentStatus() {
    return this._applEnrollmentStatus;
  }

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

  /* OnChange implementation */
  ngOnChanges(changes){
    // Handle rows being added to rowItems, such as the "Add User Button" when on the user view
    if (changes.rowItems && changes.rowItems.currentValue && changes.rowItems.previousValue
    && changes.rowItems.currentValue.length > changes.rowItems.previousValue.length){
      this.data = this.rowItems;
    }
  }

  /* OnDestroy implementation */
  ngOnDestroy(){
    this.applicantDataService.enrollmentViewTypeSelector = defaultViewSelector;
  }

  rowOpened(item: ApplEnrollmentRowComponent) {
     console.log('rowOpened', { item, rowElements: this.rowElements });
    this.rowElements.filter(x => x !== item)
      .map(x => x.closeRow());
  }

  search(phrase){
      this.searchSites(phrase);
  }

  /**
   * Filters all expandable rows, making sure changes propagate up to the top
   * level rows. Just pass in a function which will filter, with its only
   * parameter being the ExpandableRow/SiteAccess
   *
   * @private
   * @param {(sa: SiteAccess) => boolean} fn Takes a SiteAccess as a parameter
   * @memberof ApplEnrollmentListComponent
   */
  private deepSearch(fn: (sa: SiteAccess) => boolean    ){

    // Clone the source data so our changes do not wind up persisting in the underlying data
    let cloned = this.rowItems.map(x => Object.assign({}, x));

    this.data = cloned.map(enrollmentRow => {
      // Hide all subrows that don't match search results.
      enrollmentRow.expandableRows = enrollmentRow.expandableRows
        .filter(expandableRow => {
          return fn(expandableRow);
        });

      return enrollmentRow;
    }).filter(enrollmentRow => {
      // Only show rows with search results
      return enrollmentRow.expandableRows.length;
    });
  }

  // Searches based on the expandable rows, per business requirements (i.e. site name, NOT collection name!)
  searchSites(phrase) {

    if (phrase.length === 0) {
      return this.data = this.rowItems;
    }

    this.deepSearch(expandableRow => {
      console.log('deepSearch ' + expandableRow.title );
      return expandableRow.title.toLowerCase().indexOf(phrase.toLowerCase()) !== -1;
    });
  }

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

