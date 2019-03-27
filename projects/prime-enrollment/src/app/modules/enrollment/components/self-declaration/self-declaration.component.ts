import { Component, OnInit } from '@angular/core';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ISupportingDetails } from '../../../../core/interfaces';
@Component({
  selector: 'app-self-declaration',
  templateUrl: './self-declaration.component.html',
  styleUrls: ['./self-declaration.component.scss']
})
export class SelfDeclarationComponent implements OnInit {
  fg: FormGroup;
  conviction: boolean | FormControl;
  regSuspensionDesc: ISupportingDetails | FormControl;
  tAndCDesc: ISupportingDetails | FormControl;
  pharmaSuspensionDesc?: ISupportingDetails | FormControl;

  constructor(private stateSvc: EnrollmentStateService) {
    this.fg = stateSvc.declarationForm;
  }

  ngOnInit() {}

  addControl() {}
}
