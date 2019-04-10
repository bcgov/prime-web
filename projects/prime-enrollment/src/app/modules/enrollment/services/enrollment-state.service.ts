import { Injectable } from '@angular/core';
import { StateOptions } from '../data/state.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { Registrant } from '../../../../../../prime-registration/src/app/modules/registration/models/registrant.model';
import { FormGenerator } from '../models/form-generator';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { FormFieldBuilder } from '../models/form-field-builder';
import { filter } from 'rxjs/operators';
import { IOrganization } from '@prime-enrollment/core/interfaces';
import { BehaviorSubject } from 'rxjs';

const stateOpts = StateOptions;
@Injectable({
  providedIn: 'root'
})
export class EnrollmentStateService {
  private _currentIndex: number;
  private _selectedOrgSet: Set<IOrganization> = new Set(null);
  private _certForms: FormGroup[] = [];

  profileForm = new Registrant();
  declarationForm: FormGroup;
  findOrganizationForm: FormGroup;
  organizationForm: FormGroup[];
  contactForm: FormGroup;
  professionalForm: FormGroup;
  dpFa: FormArray;

  set certForms(fa: FormGroup[]) {
    this._certForms = fa;
  }

  get certForms() {
    return this._certForms;
  }

  get currentIndex() {
    return this._currentIndex;
  }

  setIndex(url: string) {
    this._currentIndex = this.findIndex(url);
  }

  findIndex(url: string) {
    switch (url) {
      case '/enrollment/profile':
        return 1;
      case '/enrollment/contact':
        return 2;
      case '/enrollment/professional':
        return 3;
      case '/enrollment/self-declaration':
        return 4;
      case '/enrollment/pharmanet-access':
        return 5;
      case '/enrollment/contact':
        return 6;
    }
  }

  validateProfessionalForm(fg: FormGroup): boolean {
    if (fg.invalid) return false;
    if (fg.controls.collegeCert.value) {
      for (const form of this._certForms) {
        if (form.invalid) return false;
      }
    }
    if (fg.controls.deviceProvider.value) {
      if (this.dpFa.invalid) return false;
    }
    return true;
  }

  isIndexValid(index: number): boolean {
    switch (index) {
      case 1:
        return true;
      case 2:
        return this.contactForm.valid;
      case 3:
        return this.validateProfessionalForm(this.professionalForm);
      case 4:
        return this.declarationForm.valid;
      case 5:
        // TODO: update validation logic for the organization form array (see case 3)
        return true;
      // return this.organizationForm.valid;
      default:
        return false;
    }
  }

  get currentStateValid(): boolean {
    const index = this.currentIndex;
    let i = 1;
    for (i; i <= index; i++) {
      if (!this.isIndexValid(i)) return false;
    }
    return true;
  }

  addOrgResults(res: IOrganization) {
    this._selectedOrgSet.add(res);
  }

  removeOrgResults(res: IOrganization) {
    this._selectedOrgSet.delete(res);
  }

  async orgResultsForm(data: IOrganization[]) {
    const fga = [];
    data.forEach(itm => {
      const name = new FormControl(itm.name);
      const city = new FormControl(itm.city);
      const type = new FormControl(itm.type);
      name.disable();
      city.disable();
      type.disable();
      const startDate = new FormControl(null, Validators.required);
      const endDate = new FormControl(null, Validators.required);
      const fg = new FormGroup({ name, city, type, startDate, endDate });
      fga.push(fg);
    });
    this.organizationForm = fga;
    return fga;
  }

  get orgResults(): IOrganization[] {
    return Array.from(this._selectedOrgSet);
  }

  orgResultsClear() {
    this._selectedOrgSet.clear();
  }

  constructor(private router: Router) {
    // TODO: come back to this function to state match once routing is done.
    this.router.events
      .pipe(
        filter(obs => obs.hasOwnProperty('id')),
        filter(obs => !obs.hasOwnProperty('state')),
        filter(obs => !obs.hasOwnProperty('navigationTrigger'))
      )
      .subscribe((obs: any) => this.setIndex(obs.url));
    this.contactForm = FormGenerator.contactForm;
    this.declarationForm = FormGenerator.declarationForm;
    this.findOrganizationForm = FormGenerator.findOrganizationForm;
    // this.organizationForm = FormGenerator.organizationForm;
    this.professionalForm = FormGenerator.professionalForm;
    this.certForms = [FormGenerator.licenseForm];
    this.dpFa = new FormArray([FormFieldBuilder.deviceProviderFields]);
  }

  addValueToFc(fc: FormControl, val: string | object[]) {
    fc.setValue(val);
    return fc;
  }

  addFormToArray(fg: FormGroup, fa: FormGroup[]) {
    fa.unshift(fg);
    return fa;
  }

  removeFormGroup(fa: FormGroup[], index: number) {
    fa.splice(index, 1);
    return fa;
  }

  addFormControl(fg: FormGroup, fc: FormControl, name: string) {
    return fg.addControl(name, fc);
  }

  addControlToFa(fa: FormArray, fc: FormControl) {
    // fa.insert(0, fc);
    const ret = new FormArray([...fa.controls, fc]);
    return ret;
  }

  removeControlFromFa(fa: FormArray, index: number) {
    fa.removeAt(index);
    return fa;
  }

  removeFormControl(fg: FormGroup, name: string) {
    for (const key of Object.keys(fg.controls)) {
      if (key === name) return fg.removeControl(name);
    }
  }
}
