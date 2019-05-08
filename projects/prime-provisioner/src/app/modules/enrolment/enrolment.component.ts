import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Container } from 'moh-common-lib/models';
import { subRoutes } from '@prime-prov/core/models/sub-routes';
import { of, from } from 'rxjs';
import { ProvisionerConstants } from '@prime-prov/core/models/provisioner-constants.model';
import { EnrolmentStateService } from './services/enrolment-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'prov-enrolment',
  template: `
    <common-core-breadcrumb>
      <common-wizard-progress-bar
        center
        [progressSteps]="progressSteps"
      ></common-wizard-progress-bar>
    </common-core-breadcrumb>
    <common-page-framework layout="blank">
      <h1>Provisioner Enrolment</h1>
    </common-page-framework>

    <router-outlet></router-outlet>

    <!-- TODO: change the submit color to yellow when ready to advance -->
    <common-form-action-bar
      (btnClick)="advancePage()"
      [submitLabel]="submitLabel$ | async"
      [isLoading]="loading"
    ></common-form-action-bar>
  `,
  styleUrls: ['./enrolment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnrolmentComponent extends Container implements OnInit {
  loading = false;
  submitLabel$ = of('Continue');
  prefix = ProvisionerConstants.PROVISIONER;

  constructor(private stateSvc: EnrolmentStateService, private router: Router) {
    super();
    this.setProgressSteps(subRoutes);
  }

  ngOnInit() {}

  advancePage() {
    const index = this.stateSvc.index + 1;
    const nextUrl = this.stateSvc.routes[index];
    const url = `/${this.prefix}/${nextUrl}`;
    this.router.navigate([url]);
  }
}
