import { Component, OnInit } from '@angular/core';
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

  datepickerOptions: INgxMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };

  /** Datetime data. Ultimate source of truth for data.  */
  model: IMyDateModel;


  constructor() {}

  ngOnInit() {
  }

  onDateChanged(event: IMyDateModel): void {}

}
