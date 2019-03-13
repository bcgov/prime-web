import { Routes } from '@angular/router';
import { BcscProfileComponent } from './pages/bcsc-profile/bcsc-profile.component';
import { BcscAccountComponent } from './pages/bcsc-account/bcsc-account.component';
import { PrimeConstants } from '../../models/prime-constants';

export const bcscPages: Routes = [
  {
    path: PrimeConstants.PROFILE_PG,
    component: BcscProfileComponent,
    data: { title: 'BCSC Profile'}
  },
  {
    path: PrimeConstants.ACCOUNT_PG,
    component: BcscAccountComponent,
    data: { title: 'BCSC Account'}
  },
  {
    path: '',
    redirectTo: PrimeConstants.PROFILE_PG
}
];
