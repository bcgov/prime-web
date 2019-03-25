import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  IDeviceProvider,
  ILicense,
  IProfessionalInformation,
  IDeclaration,
  IFindOrganization,
  IOrganization,
  IOrganizationForm,
  ISupportingDetails,
  IContact
} from '../../../core/interfaces';

export abstract class FormFieldBuilder {
  static get contactFields() {
    const phone = new FormControl(undefined, [Validators.required]);
    const sms = new FormControl(undefined, [Validators.required]);
    const ext = new FormControl(undefined, []);
    const email = new FormControl(undefined, [Validators.required]);
    const preferredContact = new FormControl(undefined, [Validators.required]);
    return { phone, sms, ext, email, preferredContact };
  }

  static get licenseFields() {
    const collegeCert = new FormControl(undefined, [Validators.required]);
    const description = new FormControl(undefined, [Validators.required]);
    const collegeNo = new FormControl(undefined, [Validators.required]);
    const licenseNum = new FormControl(undefined, [Validators.required]);
    const licenseFields = new FormControl(undefined, [Validators.required]);
    const licenseClass = new FormControl(undefined, [Validators.required]);
    const renewalDate = new FormControl(new Date(), [Validators.required]);
    return {
      collegeCert,
      description,
      collegeNo,
      licenseNum,
      licenseClass,
      renewalDate
    };
  }
  static get deviceProviderFields() {
    return new FormControl(undefined, [Validators.required]);
  }

  static get onBehalfOfFields() {
    return new FormControl(undefined, [Validators.required]);
  }
  static get professionInformationFields() {
    const deviceProvider = new FormControl(undefined, [Validators.required]);
    const collegeCert = new FormControl(undefined, [Validators.required]);
    const onBehalfOf = new FormControl(undefined, [Validators.required]);
    return { onBehalfOf, collegeCert, deviceProvider };
  }

  static get declarationFields() {
    const conviction = new FormControl(undefined, [Validators.required]);
    const regSuspension = new FormControl(undefined, [Validators.required]);
    const tAndC = new FormControl(undefined, [Validators.required]);
    const pharmaSuspension = new FormControl(undefined, [Validators.required]);

    return { conviction, regSuspension, tAndC, pharmaSuspension };
  }

  static get declarationDetailsControl() {
    return new FormControl(null, [Validators.required]);
  }

  static get findOrganizationFields() {
    const type = new FormControl(null, [Validators.required]);
    const organization = new FormControl(null, [Validators.required]);
    const city = new FormControl(null, [Validators.required]);
    return { type, organization, city };
  }

  static get organizationFields() {
    const name = new FormControl(null, []);
    const type = new FormControl(null, []);
    const city = new FormControl(null, []);
    return { name, type, city };
  }
  // TODO: fix the type checking on organization - not working for some reason;
  static get organizationFormFields() {
    const start = new FormControl(null, []);
    const end = new FormControl(null, []);

    // @ts-ignore
    return { start, end };
  }

  static get supportingDetailsField() {
    const details = new FormControl(null, []);
    const documents = new FormControl(null, []);
    return { details, documents };
  }
}
