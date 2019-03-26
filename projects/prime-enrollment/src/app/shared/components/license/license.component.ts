import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgxMyDatePickerDirective, INgxMyDpOptions } from 'ngx-mydatepicker';

@Component({
  selector: 'enroll-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LicenseComponent implements OnInit {
  @Input() fg: FormGroup;
  @Input() licenseOptions: Observable<any>;
  @Input() enableDelete: boolean;
  @Output() delete: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('dp') ngxdp: NgxMyDatePickerDirective;

  /** Default options for wrapped ngx-datepicker. */
  datepickerOptions: INgxMyDpOptions;

  constructor() {}

  ngOnInit() {}

  remove() {
    this.delete.emit(true);
  }
}
