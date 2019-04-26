import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepperGuard } from './core/guards/stepper.guard';
import { EnrollmentConfirmationComponent } from './shared/components/enrollment-confirmation/enrollment-confirmation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'enrolment',
    pathMatch: 'full',
  },
  {
    path: 'success',
    component: EnrollmentConfirmationComponent
  },
  {
    path: 'enrolment',
    loadChildren: './modules/enrollment/enrollment.module#EnrollmentModule',
    canActivate: [StepperGuard]
  },
  {
    path: '**',
    redirectTo: 'enrolment'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
