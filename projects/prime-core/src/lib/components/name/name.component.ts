import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Optional,
  Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

/**
 * TODO: Determine whether this component should be in the moh-common-lib
 */

@Component({
  selector: 'lib-prime-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameComponent implements ControlValueAccessor {

  @Input() disabled: boolean = false;
  @Input() label: string = 'Name';
  @Input() maxlen: string = '255';
  @Input() labelforId: string = 'name';

  public nameStr: string = null;

  _onChange = (_: any) => {};
  _onTouched = (_: any) => {};

  constructor( @Optional() @Self() public controlDir: NgControl ) {
    if ( controlDir ) {
      controlDir.valueAccessor = this;
    }
  }

  onValueChange( value: any ) {
    console.log( 'onValueChange: ', value  );
    this._onChange( value );
  }

  inputTouched( value: any ) {
    this._onTouched( value );
  }

  writeValue( value: any ): void {
    console.log( 'writeValue: ', value );
    if ( value !== undefined ) {
      this.nameStr = value;
    }
  }

  // Register change function
  registerOnChange( fn: any ): void {
    this._onChange = fn;
  }

  // Register touched function
  registerOnTouched( fn: any ): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  displayErrors(): boolean {
    return this.controlDir && !this.controlDir.disabled && this.controlDir.touched;
  }
}
