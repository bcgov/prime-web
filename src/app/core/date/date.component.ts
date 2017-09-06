import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../base-component/base-component.component';
import * as moment from 'moment';
import { SimpleDate } from '../../core/date/simple-date.interface';

@Component({
  selector: 'prime-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class PrimeDateComponent extends BaseComponent implements OnInit {

  @Input() showError: boolean;
  @Input() required: boolean = true;
  @Input() useCurrentDate: boolean = false;
  @Input() disabled: boolean;

  @Input() date: SimpleDate
  @Output() onDateChange: EventEmitter<SimpleDate> = new EventEmitter<SimpleDate>();


  constructor() {
    super();
  }

  ngOnInit() {
    // Can toggle to show all errors for design/dev purposes
    // this.showError = true;

    if (this.useCurrentDate) {
      this.setToToday();
    }
  }

  setYearValueOnModel(value: string) {
    if (value) {
      this.date.year = parseInt(value);
    } else {
      this.date.year = null;
    }
    this.onDateChange.emit(this.date);
  }

  setDayValueOnModel(value: string) {
    if (value) {
      this.date.day = parseInt(value);
    } else {
      this.date.day = null;
    }
    this.onDateChange.emit(this.date);
  }

  setMonthValueOnModel(value: string) {
    if (value) {
      this.date.month = parseInt(value);
    } else {
      this.date.month = null;
    }
    this.onDateChange.emit(this.date);
  }

  /**
   * Sets the default values to the current clientside date.
   */
  setToToday() : void {
    this.date.month = moment().month() + 1; //0 is blank/unselected in options list
    this.date.day = moment().date();
    this.date.year = moment().year();
  }

  isValid(): boolean {
    if (this.required) {
      if (!this.date.year || !this.date.month || !this.date.day) {
        return false;
      }
    }
    else {
      //Non-required components are okay if all fields are blank.
      if (!this.date.year && !this.date.month && !this.date.day){
        return true;
      }
    }

    //Month indices start at 1 for Jan, so 0 is unselected.
    if (!(this.date.month && this.date.month > 0 && this.date.month <= 12)) {
      return false;
    }

    if (this.date.month && (!this.date.day || !this.date.year)  ){
        return false;
    }

    return true;
  }

}
