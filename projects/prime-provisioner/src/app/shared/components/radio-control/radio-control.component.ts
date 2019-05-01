import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  forwardRef
} from '@angular/core';
import { IPreferredContactInput } from '@prime-prov/core/interfaces/ipreferred-contact-input';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'prov-radio-control',
  template: `
    <!-- ng-for control of controls -->
    <section>
      <div>
        <div *ngFor="let control of controls" class="md-radio md-radio-inline">
          <input
            (click)="select(control.value)"
            id="{{ control.id }}"
            type="radio"
            name="{{ control.name }}"
            [checked]="value === control.value"
          />
          <label for="{{ control.name }}">{{ control.label }}</label>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./radio-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioControlComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioControlComponent implements OnInit, ControlValueAccessor {
  @Input() controls: IPreferredContactInput[];
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

  // TODO: select function
  select(itm: string) {
    this.value = itm;
    this.onModelChange(itm);
    this.onTouch();
  }
}
