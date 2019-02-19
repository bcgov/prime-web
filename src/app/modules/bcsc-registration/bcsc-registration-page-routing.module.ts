import { Routes } from '@angular/router';
import { BcscProfileComponent } from './pages/bcsc-profile/bcsc-profile.component';

export const bcscPages: Routes = [
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
