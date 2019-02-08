import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MohProfileComponent } from './pages/moh-profile/moh-profile.component';
import { MohAccountComponent } from './pages/moh-account/moh-account.component';

export const routes: Routes = [
  {
    path: 'moh-profile',
    component: MohProfileComponent,
    data: { title: 'MoH Profile'}
  },
  {
    path: 'moh-account',
    component: MohAccountComponent,
    data: { title: 'MoH Account'}
  },
  {
    path: '',
    redirectTo: 'moh-profile'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MohRegistrationRoutingModule { }
