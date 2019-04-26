import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchOrganizationModalComponent } from './modules/enrollment/components/search-organization-modal/search-organization-modal.component';
import { StepperGuard } from './core/guards/stepper.guard';
import { RadioButtonComponent } from './shared/components/radio-button/radio-button.component';
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
