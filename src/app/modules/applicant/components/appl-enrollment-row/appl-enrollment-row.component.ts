import {Component, Input, OnInit} from '@angular/core';
import {EnrollmentRow, EnrollmentRowChild, RowState} from '../../../../core/enrollment-row/enrollment-row.class';
import {loadInOut, openState, openStateChild, openStateDisable} from '../../../../animations/animations';
import {SiteAccess} from '../../../../models/sites.model';
import {Collection} from '../../../../models/collections.model';

// Specific to this component
export interface ApplEnrollmentRowItem {
  title: string;

  /** associatedObjectId and title both refer to the same underlying object. By
   * having an id, we can lookup from the EnrollmentRow -> item, e.g. when
   * navigating between pages */
  associatedObjectId: string;

  /** Optional and only used in one config. */
  collections?: Collection[];
  expandableRows?: SiteAccess[];
}

@Component({
  selector: 'prime-enrollment-row',
  templateUrl: './appl-enrollment-row.component.html',
  styleUrls: ['./appl-enrollment-row.component.scss'],
  animations: [openState, openStateChild, loadInOut, openStateDisable]
})
export class ApplEnrollmentRowComponent extends EnrollmentRow implements OnInit {

  @Input() rowData: ApplEnrollmentRowItem;

  constructor() {
    super();
    console.log('ApplEnrollmentRowComponent');
  }

  ngOnInit() {

    if (!this.rowData) {
      return;
    }
  }

  // abstract method - defined in derived
  toggleRow() {

    if (this.canOpen()) {
      this.openState = this.openState === RowState.Opened ? RowState.Closed : RowState.Opened;

      if (this.openState === RowState.Opened) {
        this.onRowOpened.emit(this);
      }
    }
  }

  expandedRowClick(row: EnrollmentRowChild){
    console.log('expandedRowClick');
    this.siteAccessRequiringAttention.map(x => x.open = false);
    row.open = !row.open;
  }


  /*
    get allChildAlerts() {
    }
    */

  canOpen() {
    console.log('canOpen');
    return this.siteAccessRequiringAttention.length >= 1;
  }

  /** This function is responsible for generating site access row titles depending on dashboard type */
  get siteAccessRequiringAttention(): any[] {

    console.log('SiteAccess Required attention');
    if (!this.rowData || !this.rowData.expandableRows) {
      console.log( 'No siteAccess Requiring attention');
      return [];
    }
     console.log('siteAccess require attention');
    return this.rowData.expandableRows.map(siteAccess => {
      siteAccess.title = `${siteAccess.site.name}`;
      console.log('siteAccess.title ' + siteAccess.title);
      return siteAccess;
    });
  }
}

