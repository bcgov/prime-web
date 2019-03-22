import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IContact } from '@prime-enrollment/core/interfaces/i-contact';
import { ILicense } from '@prime-enrollment/core/interfaces/i-license';
import {
  IDeviceProvider,
  IProfessionalInformation
} from '@prime-enrollment/core/interfaces/i-professional-information';
import {
  IDeclaration,
  IFindOrganization,
  IOrganization,
  IOrganizationForm,
  ISupportingDetails
} from '@prime-enrollment/core/interfaces';

export abstract class FormFieldBuilder {
  get contactFields(): IContact {
    const phone = new FormControl(undefined, [Validators.required]);
    const sms = new FormControl(undefined, [Validators.required]);
    const ext = new FormControl(undefined, []);
    const email = new FormControl(undefined, [Validators.required]);
    const preferredContact = new FormControl(undefined, [Validators.required]);
    return { phone, sms, ext, email, preferredContact };
  }

  get licenseFields(): ILicense {
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
  get deviceProviderFields() {
    return new FormControl(undefined, [Validators.required]);
  }

  get onBehalfOfFields() {
    return new FormControl(undefined, [Validators.required]);
  }
  get professionInformationFields(): IProfessionalInformation {
    const deviceProvider = new FormControl(undefined, [Validators.required]);
    const collegeCert = new FormControl(undefined, [Validators.required]);
    const onBehalfOf = new FormControl(undefined, [Validators.required]);
    return { onBehalfOf, collegeCert, deviceProvider };
  }

  get declarationFields(): IDeclaration {
    const conviction = new FormControl(undefined, [Validators.required]);
    const regSuspension = new FormControl(undefined, [Validators.required]);
    const tAndC = new FormControl(undefined, [Validators.required]);
    const pharmaSuspension = new FormControl(undefined, [Validators.required]);

    return { conviction, regSuspension, tAndC, pharmaSuspension };
  }

  get declarationDetailsControl() {
    return new FormControl(null, [Validators.required]);
  }

  get findOrganizationFields(): IFindOrganization {
    const type = new FormControl(null, [Validators.required]);
    const organization = new FormControl(null, [Validators.required]);
    const city = new FormControl(null, [Validators.required]);
    return { type, organization, city };
  }

  get organizationFields(): IOrganization {
    const name = new FormControl(null, []);
    const type = new FormControl(null, []);
    const city = new FormControl(null, []);
    return { name, type, city };
  }
  // TODO: fix the type checking on organization - not working for some reason;
  get organizationFormFields(): IOrganizationForm {
    const organization = this.organizationFields as IOrganization;
    const start = new FormControl(null, []);
    const end = new FormControl(null, []);

    // @ts-ignore
    return { organization, start, end };
  }

  get supportingDetailsField(): ISupportingDetails {
    const details = new FormControl(null, []);
    const documents = new FormControl(null, []);
    return { details, documents };
  }
}
