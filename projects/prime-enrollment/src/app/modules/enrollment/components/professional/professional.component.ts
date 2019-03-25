import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { EnrollmentStateService } from '../../services/enrollment-state.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalComponent implements OnInit {
  fa: FormArray;
  fg: FormGroup;
  constructor(private stateSvc: EnrollmentStateService) {
    this.fg = this.stateSvc.professionalForm;
    console.log(this.fa);
  }

  ngOnInit() {}
}
