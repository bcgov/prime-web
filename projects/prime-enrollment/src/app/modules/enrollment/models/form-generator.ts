import { FormFieldBuilder } from './form-field-builder';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

export abstract class FormGenerator {
  static get contactForm(): FormGroup {
    const controls = FormFieldBuilder.contactFields;
    return new FormGroup(controls);
  }

  static get declarationForm(): FormGroup {
    const controls = FormFieldBuilder.declarationFields;
    return new FormGroup(controls);
  }

  static get findOrganizationForm(): FormGroup {
    const controls = FormFieldBuilder.findOrganizationFields;
    return new FormGroup(controls);
  }

  static get organizationForm(): FormArray {
    const controls = FormFieldBuilder.organizationFormFields;
    const orgControls = FormFieldBuilder.organizationFields;
    return new FormArray([new FormGroup(orgControls), new FormGroup(controls)]);
  }

  static get licenseForm(): FormGroup {
    const controls = FormFieldBuilder.licenseFields;
    return new FormGroup(controls);
  }

  /*
  collegeCert: boolean | FormControl;
  licenseInfo?: ILicense[] | FormArray;
  deviceProvider: boolean | FormControl;
  providerNum?: number | FormControl;
  onBehalfOf: boolean | FormControl;
  onBehalfOfThis?: string | FormControl;
  */

  static get professionalForm(): FormArray {
    const controls = FormFieldBuilder.professionInformationFields;

    return new FormArray([new FormGroup(controls), new FormGroup({})]);
  }
}
