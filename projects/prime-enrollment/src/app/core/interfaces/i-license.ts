import { FormControl } from '@angular/forms';

export interface ILicense {
  collegeCert: string | FormControl;
  description: string | FormControl;
  advancedPractice: string | FormControl;
  licenseNum: string | FormControl;
  licenseClass: string | FormControl;
  renewalDate: Date | FormControl;
}
