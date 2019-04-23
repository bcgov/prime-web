import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './shared/components/home-page/home-page.component';
import { StepperGuard } from './core/guards/stepper.guard';
import { EnrollmentConfirmationComponent } from './shared/components/enrollment-confirmation/enrollment-confirmation.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: { title: 'Home' }
  },
  {
    path: 'success',
    component: EnrollmentConfirmationComponent
  },
  {
    path: 'enrollment',
    loadChildren: './modules/enrollment/enrollment.module#EnrollmentModule',
    canActivate: [StepperGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
