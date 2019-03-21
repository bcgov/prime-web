import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrollmentComponent } from './enrollment.component';
import { subRoutes } from './data/sub-routes';

const routes: Routes = [
  {
    path: '',
    component: EnrollmentComponent,
    children: subRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentRoutingModule {}
