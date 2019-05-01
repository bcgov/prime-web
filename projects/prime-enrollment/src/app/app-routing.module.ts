import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepperGuard } from './core/guards/stepper.guard';
import { EnrollmentConfirmationComponent } from './shared/components/enrollment-confirmation/enrollment-confirmation.component';
import { EnrolmentConstants } from '@prime-enrollment/modules/enrollment/models/enrolment-constants.model';

const routes: Routes = [
  {
    path: '',
    redirectTo: EnrolmentConstants.ENROLMENT,
    pathMatch: 'full',
  },
  {
    path: 'success',
    component: EnrollmentConfirmationComponent
  },
  {
    path: EnrolmentConstants.ENROLMENT,
    loadChildren: './modules/enrollment/enrollment.module#EnrollmentModule',
    canActivate: [StepperGuard]
  },
  {
    path: '**',
    redirectTo: EnrolmentConstants.ENROLMENT
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
