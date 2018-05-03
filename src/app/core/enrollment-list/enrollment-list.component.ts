import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { EnrollmentRowItem } from '../enrollment-row/enrollment-row.interface'
import { EnrollmentRowComponent } from '../enrollment-row/enrollment-row.component';
import { EnrollmentStatus } from '../../models/prime.models';
import { Base } from '../base/base.class';

@Component({
  selector: 'prime-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.scss']
})
export class EnrollmentListComponent extends Base implements OnInit {
  @Input() rowItems: EnrollmentRowItem[];
  @ViewChildren(EnrollmentRowComponent) rowElements: QueryList<EnrollmentRowComponent>
  /** Internal representation of data used in for loops. Can be filtered by search. */
  public data: EnrollmentRowItem[];

  /** What the primary/top level rows are. Changes labels and some other layout configurations. */
  @Input() primaryType: "User"|"Site" = "Site";

  // Valid values: EnrollmentStatus enums + "All"
  public viewTypeSelector  = "All";

  //Convert enum to iterable array
  get EnrollmentStatus() {
    return Object.keys(EnrollmentStatus)
  }

  constructor() {
    super();
   }

  ngOnInit() {
    this.data = this.rowItems;
  }

  rowOpened(item: EnrollmentRowComponent) {
    // console.log("rowOpened", { item, rowElements: this.rowElements });
    this.rowElements.filter(x => x !== item)
      .map(x => x.closeRow());
  }

  search(phrase){
    if (this.primaryType === 'Site') {
      this.searchSites(phrase);
    }
    else if (this.primaryType === 'User'){
      this.searchUsers(phrase);
    }
  }

  // Searches based on the expandable rows, per business requirements (i.e. site name, NOT collection name!)
  searchSites(phrase){

    if (phrase.length === 0){
      return this.data = this.rowItems;
    }

    // We have to clone the array because of the assignemnt within the .map()
    // loop, which would wind up editting the original.
    let cloned = this.rowItems.map(x => Object.assign({}, x));

    this.data = cloned.map(enrollmentRow => {
      // Hide all subrows that don't match search results.
      enrollmentRow.expandableRows = enrollmentRow.expandableRows
      .filter(expandableRow => {
        return expandableRow.title.toLowerCase().indexOf(phrase.toLowerCase()) !== -1;
      });

      return enrollmentRow;
    }).filter(enrollmentRow => {
      // Only show rows with search results
      return enrollmentRow.expandableRows.length;
    })
  }

  // Searches based on the top level row (i.e. user name)
  searchUsers(phrase){
    this.data = this.rowItems.filter(x => {
      return x.title.toLowerCase().indexOf(phrase.toLowerCase()) !== -1;
    })
  }

  // NOTE: This doesn't work properly with search. Fine for prototype for now, but will need to be resolved in future.
  viewTypes(type){
    console.log('viewTypes', type);

    if (type === "All"){
      return this.data = this.rowItems;
    }

    // // TODO: Verify solution works for byUser and bySite
    return this.data = this.rowItems.filter(rowItem => {
      return rowItem.expandableRows
        .map(x => x.status).indexOf(type) !== -1;
    })
  }

  sort() {
    // Temporary solution for prototype before actual sorting is implemented.
    this.rowItems.reverse();
  }

  // private arrayOfStringsContains(input: string[], phrase: string): boolean {


  //   return false;
  // }


}
