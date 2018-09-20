import { Component, OnInit, Input } from '@angular/core';
import { EnrollmentList, defaultViewSelector } from '../../../../core/enrollment-list/enrollment-list.class';
import { EnrollmentStatus } from '../../../../models/enrollment-status.enum';
import { cloneDeep } from 'lodash';
import { PharmaNetOrgTypes } from '../../../../models/organizations.model';
import { RowState } from '../../../../core/enrollment-row/enrollment-row.class';
import { AddPharmaNetOrganizationComponent } from '../add-pharma-net-organization/add-pharma-net-organization.component';


@Component({
  selector: 'prime-pharma-net-access-list',
  templateUrl: './pharma-net-access-list.component.html',
  styleUrls: ['./pharma-net-access-list.component.scss']
})
export class PharmaNetAccessListComponent extends EnrollmentList implements OnInit {


  constructor() {
    super();
  }

  EnrollmentStatus: EnrollmentStatus[] = [ ];

  public orgTypes;

  ngOnInit() {
    this.orgTypes = Object.keys(PharmaNetOrgTypes).map(x => PharmaNetOrgTypes[x]);
  }

  ngOnChanges(){
    this.data = this.rowItems;
  }

  search(phrase) {
    this.data = this.rowItems.filter(x => x.title.toLowerCase().includes(phrase.toLowerCase()));
  }

  rowOpened() { 
    return null;
  }

  addOrg(component: AddPharmaNetOrganizationComponent){
    component.openModal();
  }

  viewTypes(type) {

    if (type === defaultViewSelector) {
      return this.data = this.rowItems;
    }


    this.data = this.rowItems.filter(x => {
      let target = x.type.toLowerCase();
      if (type === 'HA'){
        target = target.replace('pharmacy', '');
      }
      return target.toLowerCase().includes(type.toLowerCase());
    });
  }

}
