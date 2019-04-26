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
  preferredContactValidator,
  licenseClassValidator,
  contactValidator,
  insulinPumpValidator,
  phoneNumberValidator,
  behalfOfJobTitleValidator
} from './validators';

export abstract class FormFieldBuilder {
  static get contactFields() {
    const phone = new FormControl(null, [phoneNumberValidator()]);
    const ext = new FormControl(null, []);
    const email = new FormControl(null, [
      Validators.required,
      Validators.email
    ]);
    const voicePhone = new FormControl(null, [phoneNumberValidator()]);
    const preferredContact = new FormControl(null, [Validators.required]);
    return { phone, ext, email, voicePhone, preferredContact };
  }

  static get licenseFields() {
    const collegeCert = new FormControl(null, [Validators.required]);
    const collegeNo = new FormControl(null, [Validators.required]);
    const licenseNum = new FormControl('', [
      numberValidator(),
      Validators.maxLength(12)
    ]);
    const advancedPractice = new FormControl(null, []);
    const licenseClass = new FormControl(null, [licenseClassValidator()]);
    const renewalDate = new FormControl(null, [Validators.required]);
    return {
      collegeCert,
      advancedPractice,
      licenseNum,
      licenseClass,
      renewalDate
    };
  }
  static get deviceProviderFields() {
    return new FormControl(null, [Validators.required]);
  }

  static get onBehalfOfFields() {
    return new FormControl(null, [behalfOfJobTitleValidator()]);
  }
  static get professionInformationFields() {
    const deviceProvider = new FormControl(null, [Validators.required]);
    const collegeCert = new FormControl(null, [Validators.required]);
    const onBehalfOf = new FormControl(null, []);
    const insulinPump = new FormControl(null, [insulinPumpValidator()]);
    const onBehalfOfJobTitle = this.onBehalfOfFields;
    return {
      onBehalfOf,
      collegeCert,
      deviceProvider,
      onBehalfOfJobTitle,
      insulinPump
    };
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
    const convictionDocs = new FormControl();

    const regSuspensionDesc = new FormControl(
      null,
      descriptionValidator('regSuspension')
    );
    const regSuspensionDocs = new FormControl();

    const tAndCDesc = new FormControl(null, descriptionValidator('tAndC'));
    const tAndCDocs = new FormControl();

    const pharmaSuspensionDesc = new FormControl(
      null,
      descriptionValidator('pharmaSuspension')
    );
    const pharmaSuspensionDocs = new FormControl();

    return {
      conviction,
      regSuspension,
      tAndC,
      pharmaSuspension,
      pharmaSuspensionDesc,
      tAndCDesc,
      regSuspensionDesc,
      convictionDesc,
      tAndCDocs,
      pharmaSuspensionDocs,
      regSuspensionDocs,
      convictionDocs
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

  static get supportingDetailsField() {
    const details = new FormControl(null, []);
    const documents = new FormControl(null, []);
    return { details, documents };
  }
}
