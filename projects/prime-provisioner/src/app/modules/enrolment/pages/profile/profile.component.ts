import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EnrolmentStateService } from '../../services/enrolment-state.service';
import { ProvisionerCacheService } from '@prime-prov/core/services/provisioner-cache.service';
import { CacheService } from 'prime-core';

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
export class ProfileComponent implements OnInit {
  constructor(
    public stateSvc: EnrolmentStateService,
    public cacheSvc: CacheService
  ) {}

  ngOnInit() {}
}
