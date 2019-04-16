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
    const obj = control.parent;

    if ( control.value ) {

      const list = Object.keys( obj.value ).filter( x => {
        if ( x.includes('sec_question') ) {
          return x;
        }
      });

      // List of controls to check for duplicate
      const objList = list.map( x => obj.controls[x] );

      // Check for dupicate
      if ( objList.find( x => x.value === control.value && x !== control ) ) {
        return {'duplicateQuestion': true};
      }

      // Clear duplicate errors if no duplicate exists
      objList.forEach( element => {
        const dup = objList.find( x => x.value === element.value && x !== element );
          if ( !dup && element.getError('duplicateQuestion') ) {
            element.setErrors(null);
          }
      });
    }

    return null;
  }

}
