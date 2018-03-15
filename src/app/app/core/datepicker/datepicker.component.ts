import { Component, OnInit, Input } from '@angular/core';
import { INgxMyDpOptions, IMyDateModel, IMyDate } from 'ngx-mydatepicker';


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

  // Make enum accessible in HTML
  DatepickerSizes: typeof DatepickerSizes = DatepickerSizes;

  datepickerOptions: INgxMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
    // closeSelectorOnDateSelect: false,
  };

  /** Datetime data. Ultimate source of truth for data.  */
  model: IMyDateModel;


  constructor() {}

  ngOnInit() {
    console.log('Datepicker size', this.size);
  }

  onDateChanged(event: IMyDateModel): void {
    console.log('onDateChanged', event);
  }

  get hasValidDate(): boolean {
    // Can be improved in the future, now we just check if we have a formatted date string.
    return !!(this.model && this.model.formatted)
  }

}

enum DatepickerSizes {
  MINI = "mini",
  DEFAULT = "default"
}
