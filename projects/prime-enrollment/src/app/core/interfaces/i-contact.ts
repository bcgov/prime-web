import { FormControl } from '@angular/forms';

export interface IContact {
  phone: string | FormControl;
  sms: boolean | FormControl;
  ext: string | FormControl;
  email: string | FormControl;
  preferredContact: ContactOpts | FormControl;
}

export type ContactOpts = 'Email' | 'Phone';
