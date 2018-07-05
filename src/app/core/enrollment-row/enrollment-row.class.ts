// Implementation by component using class
import {EnrollmentStatus} from '../../models/enrollment-status.enum';
import {EventEmitter, HostBinding, Input, Output} from '@angular/core';
import {Base} from '../base/base.class';

// Expanded child for a row. For Site Enrollment, this is people. However, from User Enrollment, this would be a person.
export interface EnrollmentRowChild {
  title: string;
  alerts: EnrollmentAlerts[];

  // Hide from filter results
  hidden?: boolean;

  //Is the progress bar expanded
  open?: boolean;
}

export interface EnrollmentAlerts {
  // title: string,
  level: BadgeLevel;
  status: EnrollmentStatus;
}

// Corresponds to the Bootstrap classes we're using for notifications.
// Lower case for CSS classes
export enum BadgeLevel {
  Yellow = 'warning',
  Red = 'danger',
  Green = 'success',
  GreenLight = 'attention',
  YellowLight = 'warning-light',
  RedLight = 'danger-light'
}

export enum RowState {
  Closed = 'closed',
  Opened = 'opened',
}

export const TIMING = '250ms';

export abstract class EnrollmentRow extends Base {

  @Output() onRowOpened = new EventEmitter<any>();

  public openState = RowState.Closed;

  @HostBinding('@loadInOut') true;

  closeRow() {
    this.openState = RowState.Closed;
  }

  toggleRow() {

    if (this.canOpen()) {
      this.openState = this.openState === RowState.Opened ? RowState.Closed : RowState.Opened;

      if (this.openState === RowState.Opened) {
        this.onRowOpened.emit(this);
        // First row is open by default
        this.siteAccessRequiringAttention[0].open = open;
      }
    }
  }

  canOpen() {
    return this.siteAccessRequiringAttention.length >= 1;
  }

  expandedRowClick(row: EnrollmentRowChild) {
    this.siteAccessRequiringAttention.map(x => x.open = false);
    row.open = !row.open;
  }

  get allChildAlerts() {
    return this.siteAccessRequiringAttention.map(x => x.alert);
  }

  // Implemented by derived class
  /** This function is responsible for generating site access row titles depending on dashboard type */
  abstract get siteAccessRequiringAttention(): any[];

}
