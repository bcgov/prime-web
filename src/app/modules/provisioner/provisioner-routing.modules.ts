import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvisionerDashboardComponent } from './pages/provisioner-dashboard/provisioner-dashboard.component';
import { ProvisionerDetailsComponent } from './pages/provisioner-details/provisioner-details.component';



export const routes: Routes = [
  {
    path: 'dashboard',
    component: ProvisionerDashboardComponent,
  },
  {
    path: 'details',
    children: [
      {
        path: 'user',
        component: ProvisionerDetailsComponent,
        data: { type: 'user' }
      },
      {
        path: 'site',
        component: ProvisionerDetailsComponent,
        data: { type: 'site' }
      },
      {
        path: '**',
        redirectTo: 'user'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvisionerRoutingModule { }
