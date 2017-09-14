import { ElementRef } from '@angular/core';


export interface ValidationComponent {
  fieldName?: string;
  validate: (input: ElementRef) => boolean;
  // validate(): (input: ElementRef) => boolean;
}

/**
 * Necessary to use with ValidationComponent, since the 'validate' field is
 * a static function. By default, the `implements` keyword ignores static functions.
 */
export function staticImplements<T>() {
  return (constructor: T) => {}
}
