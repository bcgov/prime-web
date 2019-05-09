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
  }

  ngOnDestroy() {
    this.urlSub.unsubscribe();
  }
}
