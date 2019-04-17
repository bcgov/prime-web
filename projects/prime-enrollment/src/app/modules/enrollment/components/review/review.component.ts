import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { FormGroup } from '@angular/forms';
import { IDeclarationBlock } from '@prime-enrollment/core/interfaces';
import { Registrant } from '../../../../../../../prime-registration/src/app/modules/registration/models/registrant.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewComponent implements OnInit {
  df: FormGroup;
  declarations: Array<IDeclarationBlock>;
  certForms: FormGroup[];
  profileForm: Registrant;
  organizationForm: FormGroup[] = this.stateSvc.organizationForm;
  $registrantName: Observable<any>;
  $preferredName: Observable<any>;
  $mailingAddress: Observable<any>;

  constructor(public stateSvc: EnrollmentStateService) {
    this.df = this.stateSvc.declarationForm;
    this.certForms = this.stateSvc.certForms;
    this.profileForm = this.stateSvc.profileForm;
  }

  ngOnInit() {
    this.declarations = this.sdForm;
    const profile = this.profileForm;
    this.$registrantName = of(
      `${profile.firstName || null} ${profile.lastName}`
    );
    profile.preferredFirstName
      ? (this.$preferredName = of(
          `${profile.preferredFirstName} ${profile.preferredLastName}`
        ))
      : (this.$preferredName = this.$registrantName);
    profile.mailAddress.hasOwnProperty('street')
      ? (this.$mailingAddress = of(profile.mailAddress))
      : (this.$mailingAddress = of(profile.address));
  }

  get sdForm() {
    const conviction = {
      question:
        'Have you ever been the subject of an order or a conviction for an information contravention?',
      value: this.dfValues('conviction'),
      details: this.dfValues('convictionDesc'),
      docs: this.dfValues('convictionDocs')
    };
    const regSuspension = {
      question:
        'Have you ever had your registration with a governing body of a health care profession suspended or cancelled?',
      value: this.dfValues('regSuspension'),
      details: this.dfValues('regSuspensionDesc'),
      docs: this.dfValues('regSuspensionDocs')
    };
    const tAndC = {
      question: `Have you ever had Terms and Conditions imposed on your license as a result of disciplinary actions taken by a governing body?`,
      value: this.dfValues('tAndC'),
      details: this.dfValues('tAndCDesc'),
      docs: this.dfValues('tAndCDocs')
    };
    const pharmaSuspension = {
      question:
        'Have you ever had your access to PharmaNet suspended or revoked?',
      value: this.dfValues('pharmaSuspension'),
      details: this.dfValues('pharmaSuspensionDesc'),
      docs: this.dfValues('pharmaSuspensionDocs')
    };

    return [conviction, regSuspension, tAndC, pharmaSuspension];
  }

  dfValues(name: string) {
    return this.df.controls[name].value;
  }

  formValue(fg: string, name: string) {
    return this.stateSvc[fg].controls[name].value;
  }
}
