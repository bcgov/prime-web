import { Routes } from '@angular/router';
import { MohProfileComponent } from './pages/moh-profile/moh-profile.component';
import { MohAccountComponent } from './pages/moh-account/moh-account.component';
import { MohDocUploadComponent } from './pages/moh-doc-upload/moh-doc-upload.component';
import { MohSecurityComponent } from './pages/moh-security/moh-security.component';
import { PrimeConstants } from '../../models/prime-constants';

export const mohPages: Routes = [
  {
    path: PrimeConstants.PROFILE_PG,
    component: MohProfileComponent,
    data: { title: 'MoH Profile'}
  },
  {
    path: PrimeConstants.DOC_UPLD_PG,
    component: MohDocUploadComponent,
    data: { title: 'MoH Upload Documents'}
  },
  {
    path: PrimeConstants.ACCOUNT_PG,
    component: MohAccountComponent,
    data: { title: 'MoH Account'}
  },
  {
    path: PrimeConstants.SECURITY_PG,
    component: MohSecurityComponent,
    data: { title: 'MoH Security'}
  },
  {
    path: '',
    redirectTo: PrimeConstants.PROFILE_PG
}
];
