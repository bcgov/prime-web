import { FormControl } from '@angular/forms';

export interface IFindOrganization {
  type: string | FormControl;
  organization: string | FormControl;
  city: string | FormControl;
}

export interface IOrganization {
  name: string | FormControl;
  type: organizationType | FormControl;
  city: string | FormControl;
}

export interface IOrganizationForm extends IOrganization {
  organization: IOrganization;
  start: Date | FormControl;
  end: Date | FormControl;
}

export type organizationType = 'Health Authority' | 'Pharmacy';
