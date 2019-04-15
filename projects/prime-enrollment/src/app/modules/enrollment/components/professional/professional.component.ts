import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
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
  fg: FormGroup;
  onBehalfOfOptions: Observable<string[]>;
  apOptions: Observable<string[]>;

  get certFaValid() {
    let valid = true;
    if (this.fg.value.collegeCert === true) {
      for (const fg of this.certFa) {
        fg.valid ? null : (valid = false);
      }
    }
    if (this.fg.value.collegeCert === null) return false;
    if (this.fg.value.collegeCert === false) return true;

    return valid;
  }

  constructor(
    private stateSvc: EnrollmentStateService,
    public cacheSvc: EnrollmentCacheService
  ) {
    this.fg = this.stateSvc.professionalForm;
    this.certFa = this.stateSvc.certForms;
    this.dpFa = this.stateSvc.dpFa;
    this.onBehalfOfOptions = of(oboOptions);
    this.apOptions = of(apOptions);
  }

  ngOnInit() {
    this.fg.valueChanges.subscribe(obs => console.log(this.fg));
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
