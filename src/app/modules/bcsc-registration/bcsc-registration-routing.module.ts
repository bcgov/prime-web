import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BcscProfileComponent } from './pages/bcsc-profile/bcsc-profile.component';

const routes: Routes = [
  {
    path: 'bcsc-profile',
    component: BcscProfileComponent,
    data: { title: 'BCSC Profile'}
  },
  {
    path: '',
    redirectTo: 'bcsc-profile'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BcscRegistrationRoutingModule { }
