import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { subRoutes } from './data/sub-routes';
import { Container } from 'moh-common-lib/models';
import { ActivatedRoute } from '@angular/router';
import { EnrollmentStateService } from './services/enrollment-state.service';

// TODO:  re-add progress steps once routing is done.

@Component({
  selector: 'app-enrollment',
  template: `
    <common-core-breadcrumb>
      <common-wizard-progress-bar
        center
        [progressSteps]="progressSteps"
      ></common-wizard-progress-bar>
    </common-core-breadcrumb>

    <router-outlet></router-outlet>
    <common-form-action-bar
      [canContinue]="stateSvc.currentStateValid"
    ></common-form-action-bar>
  `,
  styleUrls: ['./enrollment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnrollmentComponent extends Container implements OnInit {
  constructor(public stateSvc: EnrollmentStateService) {
    super();
    this.setProgressSteps(subRoutes);
  }

  ngOnInit() {}
}
