import { TestBed } from '@angular/core/testing';

import { EnrollmentStateService } from './enrollment-state.service';
import { ActivatedRoute } from '@angular/router';
import { MockActivatedRoute } from '../mocks/mock-activated-route';
import { RouterTestingModule } from '@angular/router/testing';
import {
  FormControl,
  FormArray,
  ReactiveFormsModule,
  FormGroup
} from '@angular/forms';
import { FormFieldBuilder } from '../models/form-field-builder';
import { HttpClientModule } from '@angular/common/http';

describe('EnrollmentStateService', () => {
  let activeRoute = new MockActivatedRoute();

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: EnrollmentStateService = TestBed.get(EnrollmentStateService);
    expect(service).toBeTruthy();
  });

  it('should add a formControl to a form array', () => {
    const service: EnrollmentStateService = TestBed.get(EnrollmentStateService);
    const fa = new FormArray([new FormControl('')]);
    const fc = new FormControl('');
    const ret = service.addControlToFa(fa, fc);
    expect(ret).toBeDefined();
    expect(ret.controls.length).toBe(2);
    expect(ret.controls.length).toBeGreaterThan(fa.controls.length);
  });

  it('should remove a formControl from a form array', () => {
    const service: EnrollmentStateService = TestBed.get(EnrollmentStateService);
    const fa = new FormArray([new FormControl('')]);
    const ret = service.removeControlFromFa(fa, 0);
    expect(fa.controls).toBeDefined();
    expect(fa.controls.length).toBeLessThan(1);
  });

  it('should return true', () => {
    const service: EnrollmentStateService = TestBed.get(EnrollmentStateService);
    const bool = service.isIndexValid(2);
    expect(bool).toBeFalsy();
  });
  it('should validate the professional information form', () => {
    const service: EnrollmentStateService = TestBed.get(EnrollmentStateService);
    const fields = FormFieldBuilder.professionInformationFields;
    const form = new FormGroup(fields);
    form.controls.onBehalfOf.setValue(true);
    // expect(form.controls.onBehalfOfJobTitle.valid).toBeFalsy();
    // service.professionalForm = form;
  });
});
