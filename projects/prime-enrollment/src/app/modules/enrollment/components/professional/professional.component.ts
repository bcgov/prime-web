import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  FormArray,
  FormGroup,
  FormControl,
  Validator,
  Validators
} from '@angular/forms';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { FormFieldBuilder } from '../../models/form-field-builder';
import { FormGenerator } from '../../models/form-generator';
import { Observable, of } from 'rxjs';
import { EnrollmentCacheService } from '../../services/enrollment-cache.service';

const apOptions = [
  'Remote Practice',
  'Reproductive Care',
  'Sexually Transmitted Infections (STI)',
  'None'
];

const oboOptions = [
  'Medical Office Assistant',
  'Midwife',
  'Nurse (not Nurse Practitioner)',
  'Pharmacy Assistant',
  'Pharmacy Technician',
  'Registration Clerk',
  'Ward Clerk',
  'Other'
];
@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalComponent implements OnInit {
  certFa: FormGroup[];
  dpFa: FormArray;
  fg$: Observable<any>;
  onBehalfOfOptions: Observable<string[]>;
  apOptions: Observable<string[]>;
  showObo: boolean;

  get certFaValid() {
    let valid = true;
    const fg = this.stateSvc.professionalForm$.value;
    if (fg.value.collegeCert === true) {
      for (const fg of this.certFa) {
        fg.valid ? null : (valid = false);
      }
    }
    if (fg.value.collegeCert === null) return false;
    if (fg.value.collegeCert === false) return true;

    return valid;
  }

  constructor(
    private stateSvc: EnrollmentStateService,
    public cacheSvc: EnrollmentCacheService
  ) {
    this.fg$ = this.stateSvc.professionalForm$;
    this.certFa = this.stateSvc.certForms;
    this.dpFa = this.stateSvc.dpFa;
    this.onBehalfOfOptions = of(oboOptions);
    this.apOptions = of(apOptions);
    this.fg$.subscribe(obs => {
      if (obs.value.onBehalfOf !== null && !obs.value.deviceProvider) {
        return (this.showObo = true);
      }
      if (!obs.value.deviceProvider) return (this.showObo = true);
      else return (this.showObo = false);
    });
  }

  ngOnInit() {
    // this.stateSvc.professionalForm$.value.valueChanges.subscribe(obs =>
    //   console.log(this.stateSvc.professionalForm$.value)
    // );
  }

  requireField(fc: FormControl, bool: boolean) {
    console.log(bool);
    console.log(fc.value);
    bool ? fc.clearValidators() : fc.setValidators([Validators.required]);
    fc.updateValueAndValidity({ emitEvent: true });
  }

  addLicenseForm(fa: FormGroup[]) {
    const fg = this.stateSvc.addFormToArray(FormGenerator.licenseForm, fa);
    this.stateSvc.certForms = fg;
  }

  removeLicenseForm(index: number, fa: FormGroup[]) {
    const ret = this.stateSvc.removeFormGroup(fa, index);
    this.stateSvc.certForms = ret;
  }

  addDeviceFc(fa: FormArray) {
    const fc = FormFieldBuilder.deviceProviderFields;
    const ret = this.stateSvc.addControlToFa(fa, fc);
    this.stateSvc.dpFa = ret;
    this.dpFa = this.stateSvc.dpFa;
  }
  removeDeviceFc(fa: FormArray, index: number) {
    const ret = this.stateSvc.removeControlFromFa(fa, index);
    this.stateSvc.dpFa = ret;
  }
}
