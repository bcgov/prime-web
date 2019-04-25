import { Injectable } from '@angular/core';
import { StateOptions } from '../data/state.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { Registrant } from '../../../../../../prime-registration/src/app/modules/registration/models/registrant.model';
import { FormGenerator } from '../models/form-generator';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { FormFieldBuilder } from '../models/form-field-builder';
import { filter, multicast } from 'rxjs/operators';
import { IOrganization } from '@prime-enrollment/core/interfaces';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { SimpleDate } from 'moh-common-lib';

const dateOfBirth = {
  day: 26,
  month: 4,
  year: 1984
} as SimpleDate;

@Injectable({
  providedIn: 'root'
})
export class EnrollmentStateService {
  private _currentIndex: number;
  private _selectedOrgSet: Set<IOrganization> = new Set(null);
  private _certForms: FormGroup[] = [];
  private _certFa: FormArray;
  submitLabel = 'Continue';
  submitLabel$ = of(this.submitLabel);
  routes;

  selectedOrgs = false;

  profileForm = new Registrant();
  declarationForm$ = new BehaviorSubject<FormGroup>(null);
  declarationForm = this.declarationForm$.asObservable();
  findOrganizationForm$ = new BehaviorSubject<FormGroup>(null);

  organizationForm$ = new BehaviorSubject<FormGroup[]>(null);
  contactForm$ = new BehaviorSubject<FormGroup>(null);
  contactForm = this.contactForm$.asObservable();
  professionalForm$ = new BehaviorSubject<any>(null);
  professionalForm = this.professionalForm$.asObservable();
  dpFa: FormArray;
  submit: boolean;

  set certForms(fa: FormGroup[]) {
    this._certForms = fa;
  }

  get certForms() {
    return this._certForms;
  }

  updateCertFormValidity(index: number) {
    this._certForms[index].updateValueAndValidity();
  }

  get currentIndex() {
    return this._currentIndex;
  }

  setIndex(url: string) {
    const currentIndex = this.findIndex(url);
    if (currentIndex === 6) {
      this.submit = true;
      this.submitLabel$ = of('Submit');
    } else {
      this.submitLabel$ = of('Continue');
      this.submit = false;
    }
    this._currentIndex = currentIndex;
  }

  findIndex(url: string) {
    if (!this.routes) return;
    return this.routes.indexOf(url) + 1;
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

  validateOrganizationForm() {
    let valid = true;
    if (!this.organizationForm$.value) return false;
    if (this.organizationForm$.value.length > 0) {
      for (const form of this.organizationForm$.value) {
        if (form.invalid) valid = false;
      }
    } else return false;
    return valid;
  }

  isIndexValid(index: number): boolean {
    switch (index) {
      case 1:
        return true;
      case 2:
        return this.contactForm$.value.valid;
      case 3:
        const valid = this.validateProfessionalForm(
          this.professionalForm$.value
        );
        console.log(valid);
        return valid;
      case 4:
        console.log(this.declarationForm$.value);
        return this.declarationForm$.value.valid;
      case 5:
        return this.validateOrganizationForm();
      case 6:
        return true;
      default:
        return false;
    }
  }

  get currentStateValid(): boolean {
    const index = this._currentIndex;
    let i = 1;
    for (i; i <= index; i++) {
      if (!this.isIndexValid(i)) return false;
    }
    return true;
  }

  addOrgResults(res: IOrganization) {
    this._selectedOrgSet.add(res);
    if (!this.selectedOrgs) this.selectedOrgs = true;
  }

  removeOrgResults(res: IOrganization) {
    this._selectedOrgSet.delete(res);
    if (this.selectedOrgs && this._selectedOrgSet.size < 1) {
      this.selectedOrgs = false;
    }
  }

  async orgResultsForm(data: IOrganization[]) {
    const fga = [];
    data.forEach(itm => {
      const name = new FormControl(itm.name);
      const city = new FormControl(itm.city);
      const type = new FormControl(itm.type);
      const startDate = new FormControl(new Date(), Validators.required);
      const endDate = new FormControl(null, Validators.required);
      const fg = new FormGroup({ name, city, type, startDate, endDate });
      fga.push(fg);
    });
    this.organizationForm$.next(fga);
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
        filter(
          obs =>
            obs.hasOwnProperty('id') ||
            !obs.hasOwnProperty('state') ||
            !obs.hasOwnProperty('navigationTrigger')
        )
      )
      .subscribe((obs: any) => this.setIndex(obs.url));
    this.contactForm$.next(FormGenerator.contactForm);
    this.declarationForm$.next(FormGenerator.declarationForm);
    this.findOrganizationForm$.next(FormGenerator.findOrganizationForm);
    this.professionalForm$.next(FormGenerator.professionalForm);
    this.certForms = [FormGenerator.licenseForm];
    this.dpFa = new FormArray([FormFieldBuilder.deviceProviderFields]);

    this.profileForm.address.street = '123 fake st';
    this.profileForm.address.postal = 'V9L 3W8';
    this.profileForm.address.country = 'CA';
    this.profileForm.address.province = 'BC';
    this.profileForm.address.city = 'Victoria';

    this.profileForm.firstName = 'Sean';
    this.profileForm.lastName = 'Hamilton';
    this.profileForm.dateOfBirth = dateOfBirth;
  }

  addValueToFc(fc: FormControl, val: string | object[]) {
    fc.setValue(val);
    return fc;
  }

  addFormToArray(fg: FormGroup, fa: FormGroup[]) {
    fa.push(fg);
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

  touchForm(fg: FormGroup) {
    for (const control in fg.controls) {
      if (fg.controls.hasOwnProperty(control)) {
        const fc = fg.controls[control] as FormControl;
        this.touchControl(fc);
      }
    }
    return fg;
  }

  touchControl(fc: FormControl) {
    fc.markAsTouched();
    return fc;
  }
}
