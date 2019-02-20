import { Routes } from '@angular/router';
import { BcscProfileComponent } from './pages/bcsc-profile/bcsc-profile.component';
import { BcscAccountComponent } from './pages/bcsc-account/bcsc-account.component';

export const bcscPages: Routes = [
  {
    path: 'profile',
    component: BcscProfileComponent,
    data: { title: 'BCSC Profile'}
  },
  {
    path: 'account',
    component: BcscAccountComponent,
    data: { title: 'BCSC Account'}
  },
  {
    path: '',
    redirectTo: 'profile'
}
];
