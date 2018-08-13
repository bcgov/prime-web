import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewAccountComponent} from './pages/new-account/new-account.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {RegCompleteComponent} from './pages/complete/reg-complete.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'new-account',
    component: NewAccountComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'registration-complete',
    component: RegCompleteComponent,
  },
  {
    path: '',
    redirectTo: 'login'
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
export class RegistrationRoutingModule { }
