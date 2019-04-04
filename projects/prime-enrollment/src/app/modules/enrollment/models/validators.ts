import { AbstractControl, ValidatorFn } from '@angular/forms';

export function behalfOfValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.parent) return null;
    return control.parent.controls['onBehalfOf'].value
      ? control.value === null
        ? { invalidOnbehalfOf: { value: 'On behalf of job title is required' } }
        : control.value.length < 1
        ? { invalidOnbehalfOf: { value: 'On behalf of job title is required' } }
        : null
      : null;
  };
}

export function descriptionValidator(name: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.parent) return null;
    if (!control.parent[name]) {
      console.log('no name');
      return;
    }
    console.log(name, control.parent[name].value);
    return control.parent.controls[name].value
      ? control.value === null
        ? {
            invalidDescription: {
              value: `The ${name}Description field is required`
            }
          }
        : control.value.length < 10
        ? {
            invalidDescription: {
              value: `Enter at least 10 characters in the ${name}Description field`
            }
          }
        : null
      : null;
  };
}
