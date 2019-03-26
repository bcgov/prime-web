import { Injectable } from '@angular/core';
import { StateOptions } from '../data/state.enum';
import { ActivatedRoute } from '@angular/router';
import { Registrant } from '../../../../../../prime-registration/src/app/modules/registration/models/registrant.model';
import { FormGenerator } from '../models/form-generator';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

const stateOpts = StateOptions;

@Injectable({
  providedIn: 'root'
})
export class EnrollmentStateService {
  currentIndex: any;
  profileForm = new Registrant();
  declarationForm: FormGroup;
  findOrganizationForm: FormGroup;
  organizationForm: FormArray;
  contactForm: FormGroup;
  professionalForm: FormGroup;
  private _certForms: FormArray;

  set certForms(fa: FormArray) {
    this._certForms = fa;
  }

  get certForms() {
    return this._certForms;
  }
  // private route: ActivatedRoute
  constructor() {
    // TODO: come back to this function to state match once routing is done.
    // @ts-ignore
    // this.route.url.subscribe(obs => {
    //   this.currentIndex = stateOpts[obs];
    // });
    // const genForms = () => {
    // console.log(FormGenerator.contactForm);
    this.contactForm = FormGenerator.contactForm;
    this.declarationForm = FormGenerator.declarationForm;
    this.findOrganizationForm = FormGenerator.findOrganizationForm;
    this.organizationForm = FormGenerator.organizationForm;
    this.professionalForm = FormGenerator.professionalForm;
    this.certForms = new FormArray([FormGenerator.licenseForm]);
    console.log(this);
    // };
    // genForms();
  }

  addFormToArray(fg: FormGroup, fa: FormArray) {
    fa.push(fg);
    return fa;
  }

  addFormControl(fg: FormGroup, fc: FormControl, name: string) {
    return fg.addControl(name, fc);
  }

  removeFormControl(fg: FormGroup, name: string) {
    for (const key of Object.keys(fg.controls)) {
      if (key === name) return fg.removeControl(name);
    }
  }
}
