import { Injectable } from '@angular/core';
import { StateOptions } from '../data/state.enum';
import { ActivatedRoute } from '@angular/router';
import { Registrant } from '../../../../../../prime-registration/src/app/modules/registration/models/registrant.model';
import { FormGenerator } from '../models/form-generator';
import { FormGroup, FormArray } from '@angular/forms';

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
  professionalForm: FormArray;

  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe(obs => {
      // TODO: come back to this function to state match once routing is done.
      // @ts-ignore
      this.currentIndex = stateOpts[obs];
    });
    const genForms = () => {
      this.contactForm = FormGenerator.contactForm;
      this.declarationForm = FormGenerator.declarationForm;
      this.findOrganizationForm = FormGenerator.findOrganizationForm;
      this.organizationForm = FormGenerator.organizationForm;
      this.professionalForm = FormGenerator.professionalForm;
    };
    genForms();
  }
}
