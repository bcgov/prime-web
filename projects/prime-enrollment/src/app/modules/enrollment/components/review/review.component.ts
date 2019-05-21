import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { FormGroup } from '@angular/forms';
import { IDeclarationBlock } from '@prime-enrollment/core/interfaces';
import { Registrant } from '../../../../../../../prime-registration/src/app/modules/registration/models/registrant.model';
import { Observable, of } from 'rxjs';
import { Address } from 'moh-common-lib/models/public_api';
import { EnrollmentCacheService } from '../../services/enrollment-cache.service';
import { mergeMap, tap } from 'rxjs/operators';

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
  organizationForm: FormGroup[] = this.stateSvc.organizationForm$.value;
  $registrantName: Observable<any>;
  $preferredName: Observable<any>;
  $mailingAddress: Observable<any>;
  contact$: Observable<FormGroup>;

  constructor(
    public stateSvc: EnrollmentStateService,
    private cacheSvc: EnrollmentCacheService
  ) {
    this.df = this.stateSvc.declarationForm$.value;
    [...this.certForms] = [...this.stateSvc.certForms];
    this.profileForm = this.stateSvc.profileForm;
    const contact = this.stateSvc.contactForm$.value.value;
    this.contact$ = of(contact);
  }

  ngOnInit() {
    this.declarations = this.sdForm;
    const profile = this.profileForm;
    this.$registrantName = of(
      `${profile.firstName || null} ${profile.lastName}`
    );
    /** NOTE: Why are we doing this?  The review should show what the enrollee entered or
     * was provided to us by BSCS service or whoever provider is.
     *
     * SH - it sets the address to be the mailing address if no mailing address was entered by the user.
     **/
    const sub = this.cacheSvc.$provinceList
      .pipe(
        tap(obs => (this.cacheSvc.provinces = obs)),
        mergeMap(obs => this.cacheSvc.$countryList)
      )
      .subscribe(obs => {
        if (!obs) return;
        this.cacheSvc.countries = obs;
        this.stateSvc.setCountry(profile.address.country, 'countryName$');
        this.stateSvc.setProvince(profile.address.province, 'provinceName$');
        if (profile.mailAddress.hasOwnProperty('street')) {
          this.setMailtoAddress(profile.mailAddress);
          this.stateSvc.setCountry(
            profile.mailAddress.country,
            'mailCountryName$'
          );
          this.stateSvc.setProvince(
            profile.mailAddress.province,
            'mailProvinceName$'
          );
        } else {
          this.setMailtoAddress(profile.address);
          this.stateSvc.setCountry(profile.address.country, 'mailCountryName$');
          this.stateSvc.setProvince(
            profile.address.province,
            'mailProvinceName$'
          );
        }
      });

    profile.preferredFirstName
      ? (this.$preferredName = of(
          `${profile.preferredFirstName} ${profile.preferredLastName}`
        ))
      : (this.$preferredName = this.$registrantName);
  }

  setMailtoAddress(address: Address) {
    this.$mailingAddress = of(address);
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
