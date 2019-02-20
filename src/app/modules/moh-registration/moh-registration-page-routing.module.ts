import { Routes } from '@angular/router';
import { MohProfileComponent } from './pages/moh-profile/moh-profile.component';
import { MohAccountComponent } from './pages/moh-account/moh-account.component';
import { MohDocUploadComponent } from './pages/moh-doc-upload/moh-doc-upload.component';
import { MohSecurityComponent } from './pages/moh-security/moh-security.component';

export const mohPages: Routes = [
  {
    path: 'profile',
    component: MohProfileComponent,
    data: { title: 'MoH Profile'}
  },
  {
    path: 'upload-documents',
    component: MohDocUploadComponent,
    data: { title: 'MoH Upload Documents'}
  },
  {
    path: 'account',
    component: MohAccountComponent,
    data: { title: 'MoH Account'}
  },
  {
    path: 'security',
    component: MohSecurityComponent,
    data: { title: 'MoH Security'}
  },
  {
    path: '',
    redirectTo: 'profile'
}
];
