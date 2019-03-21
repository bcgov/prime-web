import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray } from '@angular/forms';
import { EnrollmentStateService } from '../../services/enrollment-state.service';

@Component({
  selector: 'app-pharmanet-access',
  templateUrl: './pharmanet-access.component.html',
  styleUrls: ['./pharmanet-access.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PharmanetAccessComponent implements OnInit {
  fa: FormArray;

  constructor(private stateSvc: EnrollmentStateService) {
    this.fa = this.stateSvc.organizationForm;
  }

  ngOnInit() {}
}
