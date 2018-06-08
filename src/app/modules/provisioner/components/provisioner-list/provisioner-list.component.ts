import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Site} from '../../../../models/sites.model';
import { EnrollmentRowItem } from '../../../verifier/components/enrollment-row/enrollment-row.component';
import { EnrollmentList } from '../../../../core/enrollment-list/enrollment-list.class';
import { EnrollmentStatus } from '../../../../models/enrollment-status.enum';
import { ProvisionerEnrollmentRowComponent } from '../provisioner-table/provisioner-table.component';

@Component({
  selector: 'prime-provisioner-list',
  templateUrl: './provisioner-list.component.html',
  styleUrls: ['./provisioner-list.component.scss']
})
export class ProvisionerListComponent extends EnrollmentList implements OnInit {

  @Input() rowItems: EnrollmentRowItem[];


  @ViewChildren(ProvisionerEnrollmentRowComponent) rowElements: QueryList<ProvisionerEnrollmentRowComponent>

  private _enrollmentStatus: string [] = [
    EnrollmentStatus.Approved,
    EnrollmentStatus.Declined,
    EnrollmentStatus.New,
  ];

  constructor() {
    super();
  }

  ngOnInit() {
    this.data = this.rowItems;
    console.log('OnInit (ApplEnrollmentListComponent): ' + this.data );
    // for (let i = 0; i < this.rowItems.length; i++){
    //   this.sites.push(this.rowItems[i].sites[0]);
    // }
  }

  get EnrollmentStatus() {
    return this._enrollmentStatus;
  }

  rowOpened(item) {
    console.log('rowOpened', { item, rowElements: this.rowElements });
    this.rowElements.filter(x => x !== item)
      .map(x => x.closeRow());
  }


  search(phrase){
    console.log('ProvisionerList SEARCH:', phrase);
  }

}
