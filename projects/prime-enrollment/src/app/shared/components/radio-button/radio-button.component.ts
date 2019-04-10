import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'enroll-radio-button',
  template: `
    <section>
      <div>
        <div class="md-radio md-radio-inline">
          <input
            (click)="selectType(false)"
            id="labelOne"
            type="radio"
            name="{{ name }}"
            [checked]="value === false"
          />
          <label for="labelOne">{{ labelOne }}</label>
        </div>
        <div class="md-radio md-radio-inline">
          <input
            (click)="selectType(true)"
            id="2"
            type="radio"
            name="{{ name }}"
            [checked]="value"
          />
          <label for="2">{{ labelTwo }}</label>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./radio-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonComponent implements OnInit, ControlValueAccessor {
  @Input() labelOne: string = 'No';
  @Input() labelTwo: string = 'Yes';
  @Input() name: string = 'name';
  value: any;
  onModelChange: any;
  onTouch: any;
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  constructor() {}

  ngOnInit() {}

  selectType(bool: boolean) {
    this.value = bool;
    this.onModelChange(bool);
    this.onTouch();
  }
}
