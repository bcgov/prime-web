import {Routes} from '@angular/router';
import {ProfileComponent} from './pages/profile/profile.component';
import {DocumentUploadComponent} from './pages/document-upload/document-upload.component';
import {SecurityComponent} from './pages/security/security.component';

export const pageRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'document-upload',
    component: DocumentUploadComponent,
  },
  {
    path: 'security',
    component: SecurityComponent
  }
];
