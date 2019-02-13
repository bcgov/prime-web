import { Directive, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[commonDateValidation]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => DateValidationDirective), multi: true}
  ]
})
export class DateValidationDirective implements Validator {

  validate( control: AbstractControl ): {[key: string]: any} | null {

    console.log( 'Date validation' );
    return null;
  }

}
