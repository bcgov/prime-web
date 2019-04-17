import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { subRoutes, mappedRoutes } from './data/sub-routes';
import { Container } from 'moh-common-lib/models';
import { ActivatedRoute, Router } from '@angular/router';
import { EnrollmentStateService } from './services/enrollment-state.service';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';

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
      [isLoading]="loading | async"
    ></common-form-action-bar>
  `,
  styleUrls: ['./enrollment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnrollmentComponent extends Container implements OnInit {
  submitLabel = 'Continue';
  loading = new Subject();
  constructor(public stateSvc: EnrollmentStateService, private router: Router) {
    super();
    this.setProgressSteps(subRoutes);
    this.stateSvc.routes = mappedRoutes(subRoutes, 'enrollment');
    console.log(this.stateSvc.routes);
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
      case 6:
        this.loading.next(true);
        setTimeout(() => {
          this.loading.next(false);
          this.router.navigate(['/success']);
        }, 2000);
    }
  }
}
