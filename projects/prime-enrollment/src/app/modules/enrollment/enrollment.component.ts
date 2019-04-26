import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { subRoutes, mappedRoutes } from './data/sub-routes';
import { Container } from 'moh-common-lib/models';
import { ActivatedRoute, Router } from '@angular/router';
import { EnrollmentStateService } from './services/enrollment-state.service';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';

// TODO:  re-add progress steps once routing is done.

@Component({
  selector: 'app-enrollment',
  template: `
    <common-page-framework layout="blank">
      <h1>Application Enrolment</h1>
    </common-page-framework>
    <common-core-breadcrumb>
      <common-wizard-progress-bar
        center
        [progressSteps]="progressSteps"
      ></common-wizard-progress-bar>
    </common-core-breadcrumb>

    <router-outlet></router-outlet>
    <common-form-action-bar
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
  }

  ngOnInit() {}

  advancePage() {
    const index = this.stateSvc.currentIndex;
    const valid = this.stateSvc.isIndexValid(index);
    console.log(valid);
    return valid ? this.navigate(index) : this.touchIndex(index);
  }
  navigate(index: number) {
    const route = this.stateSvc.routes[index];
    if (index === 6) {
      return setTimeout(() => {
        this.loading.next(false);
        this.router.navigate(['/success']);
      }, 2000);
    }
    return this.router.navigate([route]);
  }

  touchIndex(index: number) {
    switch (index) {
      case 2:
        let fg = this.stateSvc.contactForm$.value;
        let changed = this.stateSvc.touchForm(fg);
        return this.stateSvc.contactForm$.next(changed);
      case 3:
        fg = this.stateSvc.professionalForm$.value;
        changed = this.stateSvc.touchForm(fg);
        if (changed.controls.collegeCert) {
          const fa = this.stateSvc.certForms;
          const newArr = [];
          fa.forEach(form => {
            newArr.push(this.stateSvc.touchForm(form));
          });
          this.stateSvc.certForms = newArr;
          if (changed.controls.deviceProvider) {
            const fa = this.stateSvc.dpFa;

            fa.controls.forEach((ctrl: FormControl) => {
              newArr.push(this.stateSvc.touchControl(ctrl));
            });
            this.stateSvc.dpFa = fa;
          }
        }

        return this.stateSvc.professionalForm$.next(changed);
      case 4:
        fg = this.stateSvc.declarationForm$.value;
        changed = this.stateSvc.touchForm(fg);
        return this.stateSvc.declarationForm$.next(changed);
      case 5:
        const arr = this.stateSvc.organizationForm$.value;
        const newArr = [];
        arr.forEach(itm => {
          changed = this.stateSvc.touchForm(itm);
          newArr.push(changed);
        });
        this.stateSvc.organizationForm$.next(newArr);
    }
  }
}
