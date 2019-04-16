import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { subRoutes } from './data/sub-routes';
import { Container } from 'moh-common-lib/models';
import { ActivatedRoute, Router } from '@angular/router';
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
      (btnClick)="advancePage()"
      [defaultColor]="!stateSvc.submit"
      [submitLabel]="stateSvc.submitLabel$ | async"
    ></common-form-action-bar>
  `,
  styleUrls: ['./enrollment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnrollmentComponent extends Container implements OnInit {
  submitLabel = 'Continue';
  constructor(public stateSvc: EnrollmentStateService, private router: Router) {
    super();
    this.setProgressSteps(subRoutes);
  }

  ngOnInit() {}

  advancePage() {
    const index = this.stateSvc.currentIndex;
    switch (index) {
      case 1:
        return this.router.navigate(['/enrollment/contact']);
      case 2:
        return this.router.navigate(['/enrollment/professional']);
      case 3:
        return this.router.navigate(['/enrollment/self-declaration']);
      case 4:
        return this.router.navigate(['/enrollment/pharmanet-access']);
      case 5:
        return this.router.navigate(['/enrollment/review']);
    }
  }
}
