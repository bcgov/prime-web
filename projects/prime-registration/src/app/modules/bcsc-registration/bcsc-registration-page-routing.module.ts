import { Routes } from '@angular/router';
import { BcscProfileComponent } from './pages/bcsc-profile/bcsc-profile.component';
import { BcscAccountComponent } from './pages/bcsc-account/bcsc-account.component';
import { RegistrationConstants } from '../registration/models/registration-constants.model';

export const bcscPages: Routes = [
  {
    path: RegistrationConstants.PROFILE_PG,
    component: BcscProfileComponent,
    data: { title: 'BCSC Profile'}
  },
  {
    path: RegistrationConstants.ACCOUNT_PG,
    component: BcscAccountComponent,
    data: { title: 'BCSC Account'}
  },
  {
    path: '',
    redirectTo: RegistrationConstants.PROFILE_PG
}
];
