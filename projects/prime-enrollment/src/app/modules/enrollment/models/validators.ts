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
      return;
    }
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

export function preferredContactValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.parent) return null;
    const val = control.parent.controls['sms'].value;
    if (control.value === 'email') return null;
    if (val && control.value === 'sms') return null;
    if (!val && control.value === 'sms') {
      return {
        invalidSMS: {
          value:
            'Cannot select SMS alerts if the phone number is not SMS capable'
        }
      };
    }
  };
}

export function smsValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.parent) return null;
    const preferredContact = control.parent.controls['preferredContact'].value;
    if (!preferredContact) return null;
    if (control.value) return null;
    else {
      if (preferredContact === 'sms') {
        return {
          invalidSMS: {
            value:
              'Cannot select SMS alerts if the phone number is not SMS capable'
          }
        };
      } else return null;
    }
    return null;
  };
}

export function numberValidator() {
  return (control: AbstractControl): { [key: string]: any } | null => {
    console.log('run');
    // console.log(control);
    if (!control.parent) return null;
    if (!control.parent.controls['collegeCert'].value) return null;
    console.log(control.parent.controls['collegeCert']);
    if (control.parent.controls['collegeCert'].value === 'None') return null;
    if (control.value.length < 1) {
      return { invalid: { value: `${control.value} is not valid` } };
    }
    const forbidden = !/([0-9])/.test(control.value);
    return forbidden
      ? { invalid: { value: `${control.value} is not valid` } }
      : null;
  };
}
