import { FormControl } from '@angular/forms';

export interface IFindOrganization {
  type: string | FormControl;
  organization: string | FormControl;
  city: string | FormControl;
}

export interface IOrganization {
  name: string | FormControl;
  type: string | FormControl;
  city: string | FormControl;
}

export interface IOrganizationForm extends IOrganization {
  startDate: Date | FormControl;
  endDate: Date | FormControl;
}

export type organizationType = 'Health Authority' | 'Pharmacy';
