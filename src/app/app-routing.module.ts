import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { CustomerComponent } from 'app/customer/customer.component';
import { PersonalInfoComponent } from './pages/personal-info/personal-info.component';
import { ConsentModalComponent } from './core/consent-modal/consent-modal.component';

const routes: Routes = [
  {
    path: '',

    //toggle below to work on prepare again
    // children: [],
    canActivate: [],
    // redirectTo: 'prepare',
    redirectTo: 'personal-info',
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
    path: 'personal-info',
    component: PersonalInfoComponent,
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
