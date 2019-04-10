import { Routes } from '@angular/router';
import { MohProfileComponent } from './pages/moh-profile/moh-profile.component';
import { MohAccountComponent } from './pages/moh-account/moh-account.component';
import { MohDocUploadComponent } from './pages/moh-doc-upload/moh-doc-upload.component';
import { MohSecurityComponent } from './pages/moh-security/moh-security.component';
import { RegistrationConstants } from '../registration/models/registration-constants.model';


export const mohPages: Routes = [
  {
    path: RegistrationConstants.PROFILE_PG,
    component: MohProfileComponent,
    data: { title: 'MoH Profile'}
  },
  {
    path: RegistrationConstants.DOC_UPLD_PG,
    component: MohDocUploadComponent,
    data: { title: 'MoH Upload Documents'}
  },
  {
    path: RegistrationConstants.ACCOUNT_PG,
    component: MohAccountComponent,
    data: { title: 'MoH Account'}
  },
  {
    path: RegistrationConstants.SECURITY_PG,
    component: MohSecurityComponent,
    data: { title: 'MoH Security'}
  },
  {
    path: '',
    redirectTo: RegistrationConstants.PROFILE_PG
}
];
