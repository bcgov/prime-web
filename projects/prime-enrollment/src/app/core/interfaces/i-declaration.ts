import { ISupportingDetails } from './i-supporting-details';
import { FormControl } from '@angular/forms';

export interface IDeclaration {
  conviction: boolean | FormControl;
  convictionDesc?: ISupportingDetails | FormControl;
  regSuspension: boolean | FormControl;
  regSuspensionDesc?: ISupportingDetails | FormControl;
  tAndC: boolean | FormControl;
  tAndCDesc?: ISupportingDetails | FormControl;
  pharmaSuspension: string | FormControl;
  pharmaSuspensionDesc?: ISupportingDetails | FormControl;
  supportingDocs: Document[];
}
