import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvisionerDashboardComponent } from './pages/provisioner-dashboard/provisioner-dashboard.component';
import { ProvisionerDetailsComponent } from './pages/provisioner-details/provisioner-details.component';
import {DashboardByUserComponent} from "../verifier/pages/dashboard-page/dashboard-by-user/dashboard-by-user.component";
import {DashboardBySiteComponent} from "../verifier/pages/dashboard-page/dashboard-by-site/dashboard-by-site.component";
import {ProvisionerDashBySiteComponent} from "./pages/provisioner-dashboard/provisioner-dash-by-site/provisioner-dash-by-site.component";
import {ProvisionerDashByUserComponent} from "./pages/provisioner-dashboard/provisioner-dash-by-user/provisioner-dash-by-user.component";
import {UserEnrollmentComponent} from "../verifier/pages/user-enrollment/user-enrollment.component";
import {SiteEnrollmentComponent} from "../verifier/pages/site-enrollment/site-enrollment.component";



export const routes: Routes = [
  {
    path: 'dashboard',
    component: ProvisionerDashboardComponent,
    children: [
      {
        path: 'user',
        component: ProvisionerDashByUserComponent,
      },
      {
        path: 'site',
        component: ProvisionerDashBySiteComponent,
      },
      {
        path: '**',
        redirectTo: 'user'
      }
    ]
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
        path: 'user/:id',
        component: ProvisionerDetailsComponent,
        data: { type: 'user' }
      },
      {
        path: 'site/:id',
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
