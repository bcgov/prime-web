import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[uniqueQuestion]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => UniqueQuestionDirective), multi: true}
  ]
})
export class UniqueQuestionDirective implements Validator {

  validate( control: FormControl ): {[key: string]: any} | null {
    const obj = control.parent.value;

    if ( control.value ) {

      if ( Object.keys( obj ).filter( x => {
        if ( x.includes('sec_question') ) {
          return ((control.value === obj[x]));
        }
      }).length > 0 ) {
        return {'duplicateQuestion': true};
      }
    }
    return null;
  }

}
