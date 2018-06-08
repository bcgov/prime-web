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
  Warning = 'warning',
  Danger = 'danger',
  Info = 'info',
  Success = 'success'
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

  // Implemented by derived class
  abstract expandedRowClick<T>(row: T);
  abstract toggleRow();
  abstract canOpen();
}
