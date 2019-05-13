import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { EnrolmentStateService } from '../../services/enrolment-state.service';
import { ProvisionerCacheService } from '@prime-prov/core/services/provisioner-cache.service';
import { CacheService } from 'prime-core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'prov-profile',
  template: `
    <common-page-framework layout="blank">
      <form #formRef="ngForm">
        <lib-prime-profile
          [data]="stateSvc.profileForm"
          [countryList]="cacheSvc.$countryList | async"
          [provinceList]="cacheSvc.$provinceList | async"
          [editIdentityInfo]="false"
        ></lib-prime-profile>
      </form>
    </common-page-framework>
  `,
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit, OnDestroy {
  urlSub: Subscription;
  constructor(
    public stateSvc: EnrolmentStateService,
    public cacheSvc: CacheService,
    private route: ActivatedRoute
  ) {
    // console.log(this.stateSvc);
  }

  ngOnInit() {
    this.urlSub = this.route.url.subscribe(obs => this.stateSvc.findIndex(obs));
  }

  ngOnDestroy() {
    this.urlSub.unsubscribe();
  }
}
