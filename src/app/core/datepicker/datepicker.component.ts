import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ViewChild } from '@angular/core';
import { INgxMyDpOptions, IMyDate, NgxMyDatePickerDirective } from 'ngx-mydatepicker';


/**
 * PRIME datepicker component. Largely a wrapper for ngx-mydatepicker
 * https://github.com/kekeh/ngx-mydatepicker
 */
@Component({
  selector: 'prime-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  /** Component size can be reduced, see Datepickersizes for options */
  @Input() size: DatepickerSizes = DatepickerSizes.DEFAULT;
  @Input() date: Date;
  @Output() dateChange = new EventEmitter<Date>();
  @Input() disabled: boolean;
  @Input() labelText: string;


  /** Format for how to display the date to the user. */
  @Input() dateFormat: string = 'dd/mm/yyyy';

  /** Datetime model used to interface with ngx-datepicker. */
  model: any;

  // Make enum accessible in HTML
  DatepickerSizes: typeof DatepickerSizes = DatepickerSizes;

  @ViewChild('dp') ngxdp: NgxMyDatePickerDirective;

  /** Default options for wrapped ngx-datepicker. */
  datepickerOptions: INgxMyDpOptions;

  constructor() { }

  convertDateToSimpleDate(date: Date):IMyDate {
    if (date === null || date === undefined ) { return null }
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    }
   }
  convertSimpleDateToDate(date: IMyDate):Date {
    // When ngx-mydatepicker is cleared, it returns {year: 0, month: 0, day: 0}
    if (date.year === 0){
      return null;
    }
    return new Date(date.year, date.month - 1, date.day);
  }

  isDate(x: any): x is Date {
    return x.getDate !== undefined;
  }

  ngOnInit() {

    this.datepickerOptions = {
      dateFormat: this.dateFormat,
      sunHighlight: false,
    };

    if (this.size === DatepickerSizes.MINI) {
      //Set width/height to 4/5 of default
      this.datepickerOptions.selectorHeight = '185px';
      this.datepickerOptions.selectorWidth = '201px';
    }

    this.model = {
      date: this.convertDateToSimpleDate(this.date)
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // Parent component has passed in null, so we have to manually clear the input. This leads to 2 change detection cycles. We could refactor it down to one, but the performance hit is minimal for such a simple component.
    if (this.date === null){
      this.clearDate();
    }
  }

  onDateChanged(event): void {
    if (event.jsdate) {
      // Always emit a Date (or null), convert if necessary
      this.dateChange.emit(event.jsdate);
    }
  }

  clearDate(){
    if (this.ngxdp) {
      this.ngxdp.clearDate();
    }
  }

  get hasValidDate(): boolean {
    // Can be improved in the future, now we just check if we have a formatted date string.
    return !!(this.date)
  }

}

enum DatepickerSizes {
  MINI = "mini",
  DEFAULT = "default"
}
