import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplProfileComponent } from './components/appl-profile/appl-profile.component';
import { ApplAccountComponent } from './components/appl-account/appl-account.component';
import { ApplSecurityComponent } from './components/appl-security/appl-security.component';
import { ApplDocUploadComponent } from './components/appl-doc-upload/appl-doc-upload.component';
// import { SharedCoreModule } from '../../shared-core/shared-core.module';
import { SharedCoreModule } from 'moh-common-lib';
import { FormsModule, NgForm } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedCoreModule
  ],
  declarations: [
    ApplProfileComponent,
    ApplAccountComponent,
    ApplSecurityComponent,
    ApplDocUploadComponent,
  ],
  exports: [
    ApplProfileComponent,
    ApplAccountComponent,
    ApplSecurityComponent,
    ApplDocUploadComponent,
  ]
})
export class RegistrationModule { }
