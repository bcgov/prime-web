import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MohProfileComponent } from './pages/moh-profile/moh-profile.component';

const routes: Routes = [
  {
    path: 'moh-profile',
    component: MohProfileComponent,
    data: { title: 'MoH Profile'}
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
