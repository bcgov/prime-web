import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[libVerifyPreferName]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: VerifyPreferNameDirective, multi: true}
  ]
})
export class VerifyPreferNameDirective implements Validator  {

  // This field requires a value in this field
  @Input() depCtrlName: string;

  validate( control: AbstractControl ): {[key: string]: any} | null {

    const parent = control.parent;

    if ( this.depCtrlName ) {
      const depCtrl = parent.get( this.depCtrlName );

      if ( depCtrl ) {
        if ( !control.value && depCtrl.value ) {
          // Set error on control
          return { 'required': true  };
        } else if ( control.value ) {
          // Set error on dependent control
          depCtrl.setErrors( !depCtrl.value ? { 'required': true  }  : null );
        }
      }
    }

    return null;
  }
}
