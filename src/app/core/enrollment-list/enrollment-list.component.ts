import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { EnrollmentRowItem } from '../enrollment-row/enrollment-row.interface'
import { EnrollmentRowComponent } from '../enrollment-row/enrollment-row.component';

@Component({
  selector: 'prime-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.scss']
})
export class EnrollmentListComponent implements OnInit {
  @Input() rowItems: EnrollmentRowItem[];
  @ViewChildren(EnrollmentRowComponent) rowElements: QueryList<EnrollmentRowComponent>
  /** Internal representation of data used in for loops. Can be filtered by esarch. */
  public data: EnrollmentRowItem[];

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

}
