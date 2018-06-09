import {Base} from '../base/base.class';
import {Input} from '@angular/core';
import {SiteAccess} from '../../models/sites.model';

// Define for constant string
export const defaultViewSelector = 'View All';

export abstract class EnrollmentList extends Base {

  @Input() rowItems: any[];

  /** Internal representation of data used in for loops. Can be filtered by search. */
  public data: any[];

  // Valid values: EnrollmentStatus enums + "All"
  public viewTypeSelector  = defaultViewSelector;

  /**
   * Filters all expandable rows, making sure changes propagate up to the top
   * level rows. Just pass in a function which will filter, with its only
   * parameter being the ExpandableRow/SiteAccess
   *
   * @private
   * @param {(sa: SiteAccess) => boolean} fn Takes a SiteAccess as a parameter
   * @memberof ApplEnrollmentListComponent
   */
  protected deepSearch(fn: (sa: SiteAccess) => boolean    ){

    // Clone the source data so our changes do not wind up persisting in the underlying data
    const cloned = this.rowItems.map(x => Object.assign({}, x));

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
  protected searchSites(phrase){

    if (phrase.length === 0){
      return this.data = this.rowItems;
    }

    this.deepSearch(expandableRow => {
      return expandableRow.title.toLowerCase().indexOf(phrase.toLowerCase()) !== -1;
    });
  }

  // Searches based on the top level row (i.e. user name)
  protected searchUsers(phrase){
    this.data = this.rowItems.filter(x => {
      return x.title.toLowerCase().indexOf(phrase.toLowerCase()) !== -1;
    });
  }

  /**
   * Can be overwritten by EnrollmentList, but by default will reverse rowItems
   */
  sort() {
    this.rowItems.reverse();
  }

  // Abstract function to be implemented in derived class
  abstract get EnrollmentStatus();
  abstract search(phrase);
  // abstract rowOpened<T>(item: T); //original -  desired!
  abstract rowOpened(item); //Remove typings to pass warnings.
}
