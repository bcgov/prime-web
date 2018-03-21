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

  public ONE_ROW_OPEN_AT_A_TIME = true;


  constructor() { }

  ngOnInit() {
  }

  rowOpened(item: EnrollmentRowComponent) {
    // console.log("rowOpened", {
    //   item, rowElements: this.rowElements,
    // });
  }

}
