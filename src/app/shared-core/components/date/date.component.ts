import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Base } from '../../models/base';
import { SimpleDate } from '../../interfaces/simple-date.interface';
import { ControlContainer, NgForm } from '@angular/forms';
import * as moment from 'moment';

/**
 * Component NPM package dependencies:
 * a) moment
 */

@Component({
  selector: 'common-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
   /* Re-use the same ngForm that it's parent is using. The component will show
   * up in its parents `this.form`, and will auto-update `this.form.valid`
   */
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class DateComponent extends Base implements OnInit {
  // Exists for unit testing to validate errors set
  @ViewChild( 'monthRef' ) monthRef: ElementRef;
  @ViewChild( 'dayRef' ) dayRef: ElementRef;
  @ViewChild( 'yearRef') yearRef: ElementRef;

  @Input() useCurrentDate: boolean = false;
  @Input() required: boolean = true;
  @Input() disabled: boolean = false;
  @Input() label: string = 'Date';
  @Input() date: SimpleDate;
  /** Can be one of: "future", "past". "future" includes today, "past" does not. */
  @Input() restrictDate: 'future' | 'past' | 'any' = 'any';

  @Output() onDateChange: EventEmitter<SimpleDate> = new EventEmitter<SimpleDate>();

  public monthList: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  constructor() {
    super();
  }

  ngOnInit() {
    if ( this.useCurrentDate ) {
      // Set date to current date
      this.date.month = moment().month();
      this.date.day = moment().date();
      this.date.year = moment().year();
    }
  }

  /** Set the month and notify caller of change */
  setMonth( value: string ): void {
    const month = this.getNumericValue( value );
    console.log( 'monthRef: ', this.monthRef );
    if ( this.date ) {
      this.date.month = month;
      this.onDateChange.emit( this.date );
    }
  }

  /** Set the day and notify caller of change */
  setDay( value: string ): void {
    const day = this.getNumericValue( value );

    console.log(  'dayRef: ', this.dayRef );
    if ( this.date ) {
      this.date.day = day;
      this.onDateChange.emit( this.date );
    }
  }

  /** Set the yera and notify caller of change */
  setYear( value: string ): void {
    const year = this.getNumericValue( value );

    console.log( 'yearRef: ', this.yearRef );
    if ( this.date ) {
      this.date.year = year;
      this.onDateChange.emit( this.date );
    }
  }

  /** Convert string to numeric value or null if not */
  private getNumericValue( value: string ): number | null {
    const parsed = parseInt( value, 10 );
    return ( isNaN( parsed ) ? null : parsed );
  }
}
