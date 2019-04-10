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
  @Input() licenseLabel: Observable<any>;
  @Input() apOptions: Observable<any>;
  @Input() enableDelete: boolean;
  @Input() classOptions: Observable<any>;
  @Output() delete: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  /** Default options for wrapped ngx-datepicker. */
  datepickerOptions: INgxMyDpOptions;

  constructor() {
    console.log(this.licenseLabel);
  }

  ngOnInit() {}

  collegeSelectionChange(evt: any) {
    this.fg.updateValueAndValidity();
    this.fg.controls.licenseNum.updateValueAndValidity();
    this.fg.controls.licenseClass.setValue(null);
    this.selected.emit(evt);
  }

  remove() {
    this.delete.emit(true);
  }
}
