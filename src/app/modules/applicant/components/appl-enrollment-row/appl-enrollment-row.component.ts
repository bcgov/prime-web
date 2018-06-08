import {Component, Input, OnInit} from '@angular/core';
import {EnrollmentRow, EnrollmentRowChild, RowState} from '../../../../core/enrollment-row/enrollment-row.class';
import {loadInOut, openState, openStateChild, openStateDisable} from '../../../../animations/animations';
import {SiteAccess} from '../../../../models/sites.model';
import {EnrollmentStatus} from '../../../../models/enrollment-status.enum';

// Specific to this component
export interface ApplEnrollmentRowItem {
  title: string;

  /** associatedObjectId and title both refer to the same underlying object. By
   * having an id, we can lookup from the EnrollmentRow -> item, e.g. when
   * navigating between pages */
  associatedObjectId: string;



  /** Optional and only used in one config. */
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
    this.siteAccessRequiringAttention.map(x => x.open = false);
  }

  // abstract method - defined in derived
  toggleRow() {

    if (this.canOpen()) {
      this.openState = this.openState === RowState.Opened ? RowState.Closed : RowState.Opened ;

      if (this.openState === RowState.Opened ) {
        this.onRowOpened.emit(this);
        // First row is open by default
        this.siteAccessRequiringAttention[0].open = open;
      }

    }
  }

  expandedRowClick(row: EnrollmentRowChild) {
    this.siteAccessRequiringAttention.map(x => x.open = false);
    row.open = !row.open;
  }

  /*
  ngOnDestroy() {
    // Set all child rows to closed.
    this.siteAccessRequiringAttention.map(x => x.open = false);
  }
  */

  /** This function is responsible for generating site access row titles depending on dashboard type */
  get siteAccessRequiringAttention(): any[] {

    if (!this.rowData || !this.rowData.expandableRows) {
      return [];
    }

    // All this function does is generate titles for Site Access rows.
    return this.rowData.expandableRows.map(siteAccess => {
      siteAccess.title = `${siteAccess.site.name} / ${siteAccess.person.name}`
      return siteAccess;
    });
  }


  get allChildAlerts() {
    return this.siteAccessRequiringAttention.map(x => x.alert);
  }

  canOpen() {
    return this.siteAccessRequiringAttention.length >= 1;
  }
}


