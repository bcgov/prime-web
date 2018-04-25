import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { EnrollmentRowItem, EnrollmentRowChild } from './enrollment-row.interface';

import { openState, openStateChild, loadInOut, openStateDisable } from '../../animations/animations';


const TIMING = "250ms";
@Component({
  selector: 'prime-enrollment-row',
  templateUrl: './enrollment-row.component.html',
  styleUrls: ['./enrollment-row.component.scss'],
  animations: [openState, openStateChild, loadInOut, openStateDisable]
})
export class EnrollmentRowComponent implements OnInit {
  @Input() rowData: EnrollmentRowItem;
  @Input() primaryType: "User"|"Site" = "Site";

  @Output() onRowOpened = new EventEmitter<any>();
  public openState: string = 'closed';

  constructor() { }

  ngOnInit() {
  }

  @HostBinding('@loadInOut') true;

  toggleRow() {
    this.openState = this.openState === 'opened' ? 'closed' : 'opened';
    if (this.openState === 'opened'){
      this.onRowOpened.emit(this);
    }
  }

  closeRow() {
    this.openState = 'closed';
  }

  expandedRowClick(row: EnrollmentRowChild){
    this.rowData.expandableChildren.filter(x => x !== row)
    .map(x => x.open = false)

    row.open = !row.open;
  }

  /** This function is responsible for generating site access row titles depending on dashboard type */
  get siteAccessRequiringAttention(): any[] {

    if ( !this.rowData.expandableRows ){
      return [];
    }

    // All this function does is generate titles for Site Access rows.
    if (this.primaryType === "Site"){
      return this.rowData.expandableRows.map(siteAccess => {
        siteAccess.title = `${siteAccess.site.name} / ${siteAccess.person.name}`
        return siteAccess;
      });
    }
    else {
      return this.rowData.expandableRows.map(siteAccess => {
        siteAccess.title = `${siteAccess.person.name}`
        return siteAccess;
      });
    }

  }


  get allChildAlerts() {
    return this.siteAccessRequiringAttention.map(x => x.alert);
  }

}
