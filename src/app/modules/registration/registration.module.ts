import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApplProfileComponent } from './components/appl-profile/appl-profile.component';
import { ApplAccountComponent } from './components/appl-account/appl-account.component';
import { ApplSecurityComponent } from './components/appl-security/appl-security.component';
import { ApplDocUploadComponent } from './components/appl-doc-upload/appl-doc-upload.component';
import { SharedCoreModule } from 'moh-common-lib';
import { AddressComponent } from './components/address/address.component';
import { PageSectionsComponent } from './components/page-sections/page-sections.component';
import { ApplConfirmationComponent } from './components/appl-confirmation/appl-confirmation.component';
import { NameComponent } from './components/name/name.component';
import { TypeaheadModule } from 'ngx-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';
import { SelectComponent } from './components/prime-select/prime-select.component';
import { NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedCoreModule,
    HttpClientModule,
    TextMaskModule,
    TypeaheadModule.forRoot(),

    NgSelectModule, // TODO REMOVE
  ],
  declarations: [
    ApplProfileComponent,
    ApplAccountComponent,
    ApplSecurityComponent,
    ApplDocUploadComponent,
    AddressComponent,
    PageSectionsComponent,
    ApplConfirmationComponent,
    NameComponent,
    PhoneNumberComponent,

    SelectComponent // TODO - REmove and put into moh-common-lib
  ],
  exports: [
    ApplProfileComponent,
    ApplAccountComponent,
    ApplSecurityComponent,
    ApplDocUploadComponent,
    AddressComponent,
    PageSectionsComponent,
    ApplConfirmationComponent,
    NameComponent,
    PhoneNumberComponent
  ]
})
export class RegistrationModule { }
