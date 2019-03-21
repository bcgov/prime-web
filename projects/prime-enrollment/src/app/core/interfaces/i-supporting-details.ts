import { FormControl } from '@angular/forms';

export interface ISupportingDetails {
  details: string | FormControl;
  documents: Document[] | FormControl;
}
