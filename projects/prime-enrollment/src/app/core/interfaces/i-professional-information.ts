import { FormControl, FormArray } from '@angular/forms';
import { ILicense } from './i-license';

export interface IProfessionalInformation {
  collegeCert: boolean | FormControl;
  licenseInfo?: ILicense[] | FormArray;
  deviceProvider: boolean | FormControl;
  providerNum?: number | FormControl;
  onBehalfOf: boolean | FormControl;
  onBehalfOfThis?: string | FormControl;
}

export interface IDeviceProvider {
  providerNum: string | FormControl;
}

export interface IDeviceProvider {
  providerNum: string | FormControl;
}
