import { AbstractControl, ValidatorFn } from '@angular/forms';

export function behalfOfValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.parent) return null;
    return control.parent.controls['onBehalfOf']
      ? control.value === null
        ? { invalidOnbehalfOf: { value: 'On behalf of job title is required' } }
        : null
      : null;
  };
}
