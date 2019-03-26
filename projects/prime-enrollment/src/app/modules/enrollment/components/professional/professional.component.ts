import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { FormFieldBuilder } from '../../models/form-field-builder';
import { FormGenerator } from '../../models/form-generator';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalComponent implements OnInit {
  certFa: FormGroup[];
  fg: FormGroup;
  constructor(private stateSvc: EnrollmentStateService) {
    this.fg = this.stateSvc.professionalForm;
    // console.log(this.fa);
    this.certFa = this.stateSvc.certForms;
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
}
