import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnrolmentStateService } from '../../services/enrolment-state.service';
import { Subscription, Observable, of } from 'rxjs';
import { Registrant } from '../../../../../../../prime-registration/src/app/modules/registration/models/registrant.model';
import { Address } from 'moh-common-lib/models/moh-common-lib-models';

@Component({
  selector: 'prov-review',
  template: `
    <common-page-framework layout="blank">
      <prov-page-header
        [title]="title"
        [helperText]="helperText"
      ></prov-page-header>
      <common-page-section layout="double">
        <a [routerLink]="['/enrolment/profile']">
          <h2>Profile</h2>
        </a>
        <lib-prime-profile-block
          [name]="profile.firstName + ' ' + profile.lastName"
          [preferredName]="preferredName$ | async"
          [dateOfBirth]="profile.dateOfBirth"
        ></lib-prime-profile-block>
        <div class="address-label-row m-0 pl-3">
          <a [routerLink]="['/enrolment/profile']">
            <h3 class="m-0">Address</h3>
          </a>
        </div>
        <prov-address-block [address]="profile.address"></prov-address-block>
        <div class="address-label-row label-row m-0 pl-3 pr-3">
          <a [routerLink]="['/enrolment/profile']">
            <h3 class="m-0">Mailing Address</h3>
          </a>
          <a [routerLink]="['/enrolment/profile']">
            <i class="fa fa-pencil"></i>
          </a>
        </div>
        <prov-address-block
          [address]="mailAddress$ | async"
        ></prov-address-block>
        <ng-container *ngIf="contactForm | async as cFg">
          <div class="label-row">
            <a [routerLink]="['/enrolment/contact']">
              <h2>Contact</h2>
            </a>
            <a [routerLink]="['/enrolment/contact']">
              <i class="fa fa-pencil"></i>
            </a>
          </div>
          <lib-prime-contact-block
            [email]="cFg.value.email"
            [phone]="cFg.value.phone"
            [voicePhone]="cFg.value.voicePhone"
            [preferredContact]="cFg.value.preferredContact"
            [ext]="cFg.value.ext"
          ></lib-prime-contact-block>
        </ng-container>
        <div class="label-row">
          <a [routerLink]="['/enrolment/self-declaration']">
            <h2>Contact</h2>
          </a>
          <a [routerLink]="['/enrolment/self-declaration']">
            <i class="fa fa-pencil"></i>
          </a>
        </div>
        <ng-container *ngFor="let declaration of declarations">
          <lib-prime-self-declaration-question-block
            [question]="declaration.question"
            [answer]="declaration.value"
            [details]="declaration.details"
            [documents]="declaration.docs"
          ></lib-prime-self-declaration-question-block>
        </ng-container>
        <aside>
          <div class="label-row">
            <a [routerLink]="['/enrolment/organization']">
              <h2>Provisioner Access</h2>
            </a>
            <a [routerLink]="['/enrolment/organization']">
              <i class="fa fa-pencil"></i>
            </a>
          </div>
          <prov-access-group-block
            label="Groups"
            [groups]="groups"
          ></prov-access-group-block>
          <div class="row"></div>
          <prov-access-group-block
            label="Organizations"
            [groups]="organizations"
          ></prov-access-group-block>
        </aside>
      </common-page-section>
    </common-page-framework>
  `,
  styleUrls: ['./review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewComponent implements OnInit, OnDestroy {
  urlSub: Subscription;
  title = 'Application Review';
  helperText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit..';
  profile: Registrant;
  preferredName$: Observable<string>;
  mailAddress$: Observable<Address>;
  contactForm = this.stateSvc.contactForm;
  sdForm = this.stateSvc.selfDeclarationForm;
  declarations: { question: string; value: any; details: any; docs: any }[];
  groups = ['Western Canada', 'Central Canada'];
  organizations = [
    'Alberta Health Authority',
    'Lower Mainland Health',
    'V.I. Health Authority'
  ];

  constructor(
    private route: ActivatedRoute,
    private stateSvc: EnrolmentStateService
  ) {
    this.profile = this.stateSvc.profileForm;
    if (typeof (this.profile.preferredFirstName === 'undefined')) {
      this.preferredName$ = of(
        `${this.profile.firstName} ${this.profile.lastName}`
      );
    } else {
      this.preferredName$ = of(
        `${this.profile.preferredFirstName} ${this.profile.preferredLastName}`
      );
    }
    // console.log(this.preferredName);

    this.profile.mailAddress.city
      ? (this.mailAddress$ = of(this.profile.mailAddress))
      : (this.mailAddress$ = of(this.profile.address));
  }

  ngOnInit() {
    this.urlSub = this.route.url.subscribe(obs => this.stateSvc.findIndex(obs));
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
    this.declarations = [conviction, regSuspension, tAndC, pharmaSuspension];
  }

  ngOnDestroy() {
    this.urlSub.unsubscribe();
  }

  dfValues(name: string) {
    return this.sdForm.value[name];
  }
}
