import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';
import * as moment from 'moment';

@Directive({
  selector: '[commonDayValidation]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => DayValidationDirective), multi: true}
  ]
})
export class DayValidationDirective implements Validator {

  validate( control: FormControl ): {[key: string]: any} | null {
    const month = control.parent.get( 'month' );
    const year = control.parent.get( 'year' );

    if ( month.value && year.value) {

      // Determine days in month
      let daysInMonth: number = moment(`${year.value}-${month.value}`, 'YYYY-MM').daysInMonth();
      if ( isNaN( daysInMonth ) ) {
        daysInMonth = 31;
      }

      // Validate days
      const day: number = parseInt( control.value, 10 );
      console.log( 'day: ' + day);
      if ( day > daysInMonth || day < 1 ) {
        return { 'calendarDayOutOfRange': true };
      }
    }

    return null;
  }

}
