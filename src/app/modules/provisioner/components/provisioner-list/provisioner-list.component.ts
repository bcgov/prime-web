import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import { EnrollmentRowItem } from '../../../verifier/components/enrollment-row/enrollment-row.component';
import { EnrollmentList, defaultViewSelector } from '../../../../core/enrollment-list/enrollment-list.class';
import { EnrollmentStatus } from '../../../../models/enrollment-status.enum';
import { ProvisionerRowComponent } from '../provisioner-row/provisioner-row.component';
import { Site } from '../../../../models/sites.model';

@Component({
  selector: 'prime-provisioner-list',
  templateUrl: './provisioner-list.component.html',
  styleUrls: ['./provisioner-list.component.scss']
})
export class ProvisionerListComponent extends EnrollmentList implements OnInit {

  @Input() rowItems: EnrollmentRowItem[] = [];
  @Input() primaryType: "User"|"Site" = "User";

  @ViewChildren(ProvisionerRowComponent) rowElements: QueryList<ProvisionerRowComponent>

  sites: Site[] = [];

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
    for (let i = 0; i < this.rowItems.length; i++){
      this.sites.push(this.rowItems[i].sites[0]);

    }
    console.log('OnInit (ProvisionerListComponent): ', this.data );
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

  viewTypes(type){
    if (type === defaultViewSelector){
      return this.data = this.rowItems;
    }

    this.deepSearch(expandableRow => {
      return expandableRow.status.includes(type);
    })
  }

}
