import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { FormGroup } from '@angular/forms';
import { IDeclarationBlock } from '@prime-enrollment/core/interfaces';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewComponent implements OnInit {
  df: FormGroup;
  declarations: Array<IDeclarationBlock>;

  constructor(public stateSvc: EnrollmentStateService) {
    this.df = this.stateSvc.declarationForm;
  }

  ngOnInit() {
    this.declarations = this.sdForm;
  }

  get sdForm() {
    const conviction = {
      question:
        'Have you ever been the subject of an order or a conviction for an information contravention?',
      value: this.dfValues('conviction'),
      details: this.dfValues('convictionDesc')
    };
    const regSuspension = {
      question:
        'Have you ever had your registration with a governing body of a health care profession suspended or cancelled?',
      value: this.dfValues('regSuspension'),
      details: this.dfValues('regSuspensionDesc')
    };
    const tAndC = {
      question: `Have you ever had Terms and Conditions imposed on your license as a result of disciplinary actions taken by a governing body?`,
      value: this.dfValues('tAndC'),
      details: this.dfValues('tAndCDesc')
    };
    const pharmaSuspension = {
      question:
        'Have you ever had your access to PharmaNet suspended or revoked?',
      value: this.dfValues('pharmaSuspension'),
      details: this.dfValues('pharmaSuspensionDesc')
    };

    return [conviction, regSuspension, tAndC, pharmaSuspension];
  }

  dfValues(name: string) {
    return this.df.controls[name].value;
  }

  formValue(fg: string, name: string) {
    console.log(this.stateSvc[fg].controls[name].value);
    return this.stateSvc[fg].controls[name].value;
  }
}
