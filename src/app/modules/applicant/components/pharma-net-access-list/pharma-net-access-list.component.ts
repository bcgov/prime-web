import { Component, OnInit } from '@angular/core';
import { EnrollmentList, defaultViewSelector } from '../../../../core/enrollment-list/enrollment-list.class';
import { EnrollmentStatus } from '../../../../models/enrollment-status.enum';
import { cloneDeep } from 'lodash';


@Component({
  selector: 'prime-pharma-net-access-list',
  templateUrl: './pharma-net-access-list.component.html',
  styleUrls: ['./pharma-net-access-list.component.scss']
})
export class PharmaNetAccessListComponent extends EnrollmentList implements OnInit {

  constructor() {
    super();
  }

  EnrollmentStatus: EnrollmentStatus[] = [
    EnrollmentStatus.New,
    EnrollmentStatus.Active,
    EnrollmentStatus.Declined,
  ];

  public loadingSpinner: boolean = false;

  ngOnInit() {
    if (this.rowItems) {
      this.data = cloneDeep( this.rowItems );
    }
  }

  cancel() {
    console.log('TODO cancel');
  }

  save() {
    console.log('TODO save');
  }

  search(phrase) {
    console.log('TODO VERIFY - search - ', phrase);
    // this.deepSearch(phrase);
  }

  rowOpened(item) {
    console.log('TODO - rowOpened, close other rows', item);
    // this.rowElements.filter(x => x !== item)s
    // .map(x => x.closeRow());
  }

  onChange(event) {
    console.log('onChange', event);
  }

  viewTypes(type) {

    if (type === defaultViewSelector) {
      return this.data = this.rowItems;
    }

    this.deepSearch(expandableRow => {
      return expandableRow.status.includes(type);
    });
  }

}
