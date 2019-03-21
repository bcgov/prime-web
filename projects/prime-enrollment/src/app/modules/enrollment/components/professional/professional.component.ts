import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray } from '@angular/forms';
import { EnrollmentStateService } from '../../services/enrollment-state.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalComponent implements OnInit {
  fa: FormArray;
  constructor(private stateSvc: EnrollmentStateService) {
    this.fa = this.stateSvc.professionalForm;
  }

  ngOnInit() {}
}
