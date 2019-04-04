import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { FormFieldBuilder } from '../../models/form-field-builder';
import { FormGenerator } from '../../models/form-generator';
import { Observable, of } from 'rxjs';
const options = ['Programmer', 'Pharmacist'];
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

  constructor(private stateSvc: EnrollmentStateService) {
    this.fg = this.stateSvc.professionalForm;
    this.certFa = this.stateSvc.certForms;
    this.dpFa = this.stateSvc.dpFa;
    this.onBehalfOfOptions = of(options);
  }

  ngOnInit() {}

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
