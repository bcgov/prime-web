import { Routes } from '@angular/router';
import { MohProfileComponent } from './pages/moh-profile/moh-profile.component';
import { MohAccountComponent } from './pages/moh-account/moh-account.component';

export const pageRoutes: Routes = [
  {
    path: 'moh-profile',
    component: MohProfileComponent,
    data: { title: 'MoH Profile'}
  },
  {
    path: 'moh-account',
    component: MohAccountComponent,
    data: { title: 'MoH Account'}
  }
];
