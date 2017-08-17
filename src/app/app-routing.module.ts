import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { CustomerComponent } from 'app/customer/customer.component';
import { ProfessionalInfoComponent } from './pages/professional-info/professional-info.component';
import { ConsentModalComponent } from './core/consent-modal/consent-modal.component';

const routes: Routes = [
  {
    path: '',

    //toggle below to work on prepare again
    // children: [],
    canActivate: [],
    // redirectTo: 'prepare',
    redirectTo: 'professional-info',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      breadcrumb: 'Dashboard'
    }
  },
  {
    path: 'professional-info',
    component: ProfessionalInfoComponent,
  },
  {
    path: 'prepare',
    component: ConsentModalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
