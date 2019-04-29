import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrollmentComponent } from './enrollment.component';
import { subRoutes } from './data/sub-routes';
import { EnrolmentConstants } from './data/enrolment-constants.model';

const routes: Routes = [
  {
    path: '',
    component: EnrollmentComponent,
    children: [
      {
        path: '',
        redirectTo: EnrolmentConstants.PROFILE_PG,
        pathMatch: 'full'
      },
      ...subRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentRoutingModule {}
