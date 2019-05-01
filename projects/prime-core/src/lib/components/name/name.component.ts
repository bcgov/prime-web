import {
  Component,
  Input,
  Optional,
  Self,
  Output,
  EventEmitter } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Base } from 'moh-common-lib/models';

/**
 * TODO: Determine whether this component should be in the moh-common-lib
 */

@Component({
  selector: 'lib-prime-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent extends Base implements ControlValueAccessor {

  @Input() disabled: boolean = false;
  @Input() label: string = 'Name';
  @Input() maxlen: string = '255';
  @Input() labelforId: string = 'name_' + this.objectId;

  @Output() blurEvent: EventEmitter<any> = new EventEmitter<any>();

  public nameStr: string = null;

  _onChange = (_: any) => {};
  _onTouched = (_: any) => {};

  constructor( @Optional() @Self() public controlDir: NgControl ) {
    super();
    if ( controlDir ) {
      controlDir.valueAccessor = this;
    }
  }

  onValueChange( value: any ) {
    this._onChange( value );

  }

  onBlurEvent( value: any ) {
    this._onTouched( value );
    this.blurEvent.emit( value );
  }

  writeValue( value: any ): void {
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
    const displayErr = this.controlDir && !this.controlDir.disabled &&
    ( this.controlDir.dirty || this.controlDir.touched );
    return displayErr;
  }
}
