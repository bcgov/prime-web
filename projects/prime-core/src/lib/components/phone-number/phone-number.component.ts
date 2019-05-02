import {
  Component,
  Input,
  Self,
  Optional,
  Output,
  EventEmitter
} from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { Base, NUMBER, SPACE } from 'moh-common-lib/models';

@Component({
  selector: 'lib-prime-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneNumberComponent extends Base implements ControlValueAccessor {
  @Input() displayMask: boolean = true;
  @Input() label: string = 'Mobile/SMS';
  @Input() labelforId: string = 'phone_' + this.objectId;
  @Input() maxlen: string = '30';
  @Input() disabled: boolean = false;

  @Output() blurEvent: EventEmitter<any> = new EventEmitter<any>();

  phoneNumber: string = null;
  mask: any;
  placeholder: string;
  criteria: RegExp = /^[0-9\- ()+]*$/;

  _onChange = (_: any) => {};
  _onTouched = (_: any) => {};

  constructor( @Optional() @Self() public controlDir: NgControl ) {
    super();
    if ( controlDir ) {
      controlDir.valueAccessor = this;
    }

    this.mask = [
      '+',
      '1',
      SPACE,
      '(',
      NUMBER,
      NUMBER,
      NUMBER,
      ')',
      SPACE,
      NUMBER,
      NUMBER,
      NUMBER,
      '-',
      NUMBER,
      NUMBER,
      NUMBER,
      NUMBER
    ];
    this.placeholder = '+1 (555) 555-5555';
  }

  onValueChange( value: any ) {
    this._onChange( value );

  }

  onBlurEvent( event: any ) {

    const val = event.target.value;

    if ( !this.displayMask && val ) {
      // Check for valid characters

      const passTest = this.criteria.test( val );
      this.controlDir.control.setErrors( (passTest ? null : { 'invalidChar': true } ) );

      console.log( 'passTest: ', passTest, val );
    }

    this._onTouched( event );
    this.blurEvent.emit( val );
  }

  writeValue( value: any ): void {
    if ( value !== undefined ) {
      this.phoneNumber = value;
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
}
