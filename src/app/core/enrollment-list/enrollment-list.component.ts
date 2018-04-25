import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { EnrollmentRowItem } from '../enrollment-row/enrollment-row.interface'
import { EnrollmentRowComponent } from '../enrollment-row/enrollment-row.component';
import { EnrollmentStatus } from '../../models/prime.models';

@Component({
  selector: 'prime-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.scss']
})
export class EnrollmentListComponent implements OnInit {
  @Input() rowItems: EnrollmentRowItem[];
  @ViewChildren(EnrollmentRowComponent) rowElements: QueryList<EnrollmentRowComponent>
  /** Internal representation of data used in for loops. Can be filtered by search. */
  public data: EnrollmentRowItem[];

  // Valid values: EnrollmentStatus enums + "All"
  public viewTypeSelector  = "All";

  //Convert enum to iterable array
  get EnrollmentStatus() {
    return Object.keys(EnrollmentStatus)
  }

  constructor() { }

  ngOnInit() {
    this.data = this.rowItems;
  }

  rowOpened(item: EnrollmentRowComponent) {
    // console.log("rowOpened", { item, rowElements: this.rowElements });
  }

  search(phrase){
    this.data = this.rowItems.filter(x => {
      return x.title.toLowerCase().indexOf(phrase.toLowerCase()) !== -1;
    })
  }

  // FIXME: This doesn't work properly with search.
  viewTypes(type){
    if (type == "All") {
      return this.data.map(rowItem => {
        rowItem.expandableChildren.map(rowChild => {
          rowChild.hidden = false;
        })
      });
    }

    console.log('viewTypes', type);
    this.data = this.rowItems.map(x => {
      if (!x.expandableChildren) return;

      x.expandableChildren.map(child => {
        child.hidden = (child.alerts[0].status !== type);
      })

      return x;
    })
  }

  sort() {
    // Temporary solution for prototype before actual sorting is implemented.
    this.rowItems.reverse();
  }


}
