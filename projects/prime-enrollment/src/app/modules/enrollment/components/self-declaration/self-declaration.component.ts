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
  convictionLabel =
    'Have you ever been the subject of an order or a conviction for an information contravention?';
  regSuspensionLabel =
    'Have you ever had your registration with a governing body of a health profession suspended or cancelled?';
  tAndCLabel =
    'Have you ever had Terms and Conditions imposed on your license as a result of disciplinary actions taken by a governing body?';
  pharmaSuspensionLabel =
    'Have you ever had your access to PharmaNet suspended or revoked?';
  images = [];
  constructor(private stateSvc: EnrollmentStateService) {
    this.fg = stateSvc.declarationForm;
    this.fg.valueChanges.subscribe(obs => console.log(obs));
  }

  ngOnInit() {}

  imagesChange(evt: any, fc: FormControl) {
    // console.log(evt);
    // console.log(fc);
    this.stateSvc.addValueToFc(fc, evt);
  }
}
