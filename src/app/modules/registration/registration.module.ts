import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplProfileComponent } from './components/appl-profile/appl-profile.component';
import { ApplAccountComponent } from './components/appl-account/appl-account.component';
import { ApplSecurityComponent } from './components/appl-security/appl-security.component';
import { ApplDocUploadComponent } from './components/appl-doc-upload/appl-doc-upload.component';
import { SharedCoreModule } from '../../shared-core/shared-core.module';
import { FormsModule, NgForm } from '@angular/forms';
import { AddressComponent } from './components/address/address.component';
import { HttpClientModule } from '@angular/common/http';
import { PageSectionsComponent } from './components/page-sections/page-sections.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedCoreModule,
    HttpClientModule
  ],
  declarations: [
    ApplProfileComponent,
    ApplAccountComponent,
    ApplSecurityComponent,
    ApplDocUploadComponent,
    AddressComponent,
    PageSectionsComponent
  ],
  exports: [
    ApplProfileComponent,
    ApplAccountComponent,
    ApplSecurityComponent,
    ApplDocUploadComponent,
    AddressComponent,
    PageSectionsComponent
  ]
})
export class RegistrationModule { }
