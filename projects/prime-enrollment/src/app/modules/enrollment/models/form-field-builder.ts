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
import {
  behalfOfValidator,
  descriptionValidator,
  numberValidator,
  preferredContactValidator
} from './validators';

export abstract class FormFieldBuilder {
  static get contactFields() {
    const phone = new FormControl(null, [
      Validators.required,
      Validators.minLength(10)
    ]);
    const sms = new FormControl(false, [Validators.required]);
    const ext = new FormControl(null, []);
    const email = new FormControl(null, [Validators.required]);
    const preferredContact = new FormControl(null, [
      Validators.required,
      preferredContactValidator()
    ]);
    return { phone, sms, ext, email, preferredContact };
  }

  static get licenseFields() {
    const collegeCert = new FormControl(null, [Validators.required]);
    // const description = new FormControl(null, [Validators.required]);
    const collegeNo = new FormControl(null, [Validators.required]);
    const licenseNum = new FormControl(null, [
      Validators.required,
      numberValidator(),
      Validators.maxLength(12)
    ]);
    const advancedPractice = new FormControl(null, [Validators.required]);
    const licenseClass = new FormControl(null, [Validators.required]);
    const renewalDate = new FormControl(new Date(), [Validators.required]);
    return {
      collegeCert,
      advancedPractice,
      collegeNo,
      licenseNum,
      licenseClass,
      renewalDate
    };
  }
  static get deviceProviderFields() {
    return new FormControl(null, [Validators.required]);
  }

  static get onBehalfOfFields() {
    return new FormControl(null, [behalfOfValidator()]);
  }
  static get professionInformationFields() {
    const deviceProvider = new FormControl(null, [Validators.required]);
    const collegeCert = new FormControl(null, [Validators.required]);
    const onBehalfOf = new FormControl(null, [Validators.required]);
    const onBehalfOfJobTitle = this.onBehalfOfFields;
    return { onBehalfOf, collegeCert, deviceProvider, onBehalfOfJobTitle };
  }

  static get declarationFields() {
    const conviction = new FormControl(null, [Validators.required]);
    const regSuspension = new FormControl(null, [Validators.required]);
    const tAndC = new FormControl(null, [Validators.required]);
    const pharmaSuspension = new FormControl(null, [Validators.required]);
    const convictionDesc = new FormControl(
      null,
      descriptionValidator('conviction')
    );
    const regSuspensionDesc = new FormControl(
      null,
      descriptionValidator('regSuspension')
    );
    const tAndCDesc = new FormControl(null, descriptionValidator('tAndC'));
    const pharmaSuspensionDesc = new FormControl(
      null,
      descriptionValidator('pharmaSuspension')
    );
    const supportingDocs = new FormControl(null);

    return {
      conviction,
      regSuspension,
      tAndC,
      pharmaSuspension,
      pharmaSuspensionDesc,
      tAndCDesc,
      regSuspensionDesc,
      convictionDesc,
      supportingDocs
    };
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
