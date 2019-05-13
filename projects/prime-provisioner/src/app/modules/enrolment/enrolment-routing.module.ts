import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { subRoutes } from '@prime-prov/core/models/sub-routes';
import { ProvisionerConstants } from '@prime-prov/core/models/provisioner-constants.model';
import { EnrolmentComponent } from './enrolment.component';

const routes: Routes = [
  {
    path: '',
    component: EnrolmentComponent,
    children: [
      {
        path: '',
        redirectTo: ProvisionerConstants.PROFILE_PG,
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
export class EnrolmentRoutingModule {}
