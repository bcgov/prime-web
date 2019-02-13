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

  @ViewChild( 'dayRef' ) dayRef: ElementRef;
  @ViewChild( 'yearRef') yearRef: ElementRef;

  @Input() useCurrentDate: boolean = false;
  @Input() required: boolean = true;
  @Input() disabled: boolean = false;
  @Input() label: string = 'Date';
  @Input() date: SimpleDate;
  /** Can be one of: "future", "past". "future" includes today, "past" does not. */
  @Input() restrictDate: 'future' | 'past' = 'past';

  @Output() onDateChange: EventEmitter<SimpleDate> = new EventEmitter<SimpleDate>();

  public monthList: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  constructor() {
    super();
  }

  ngOnInit() {
  }

  setMonth( value: string ): void {
    const month = this.getNumericValue( value );
    console.log( 'month: ', month );
    if ( this.date ) {
      this.date.month = month - 1;
      this.onDateChange.emit( this.date );
    }
  }

  setDay( value: string ): void {
    const day = this.getNumericValue( value );

    console.log(  'Ref: ', this.dayRef + ' date: ', this.date );
    if ( this.date ) {
      console.log( 'day: ', day + ' Ref: ', this.dayRef );
      this.date.day = day;
      this.onDateChange.emit( this.date );
    }
  }

  setYear( value: string ): void {
    const year = this.getNumericValue( value );
    console.log( 'year: ', year + ' Ref: ', this.yearRef );
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
