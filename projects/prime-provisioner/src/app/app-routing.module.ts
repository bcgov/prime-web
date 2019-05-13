import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvisionerConstants } from './core/models/provisioner-constants.model';
import { StepperGuard } from './core/guards/stepper.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: ProvisionerConstants.PROVISIONER,
    pathMatch: 'full'
  },
  // TODO: add success component
  // {
  //   path: 'success',
  //   component:
  // },
  {
    path: ProvisionerConstants.PROVISIONER,
    loadChildren: './modules/enrolment/enrolment.module#EnrolmentModule',
    canActivate: [StepperGuard]
  },
  {
    path: '**',
    redirectTo: ProvisionerConstants.PROVISIONER
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
