import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {EnrollmentRowItem} from '../../../verifier/components/enrollment-row/enrollment-row.interface';
import {Site} from '../../../../models/sites.model';

@Component({
  selector: 'prime-provisioner-list',
  templateUrl: './provisioner-list.component.html',
  styleUrls: ['./provisioner-list.component.scss']
})
export class ProvisionerListComponent implements OnInit {

  @Input() rowItems: EnrollmentRowItem[];

  /** Internal representation of data used in for loops. Can be filtered by search. */
  sites: Site[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.rowItems.length; i++){
      this.sites.push(this.rowItems[i].sites[0]);
    }
  }

}
