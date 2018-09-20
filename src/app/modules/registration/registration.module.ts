import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationRoutingModule} from './registration-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { DocumentUploadComponent } from './pages/document-upload/document-upload.component';
import { SecurityComponent } from './pages/security/security.component';
import {NewAccountComponent} from './pages/new-account/new-account.component';
import { LoginComponent } from './pages/login/login.component';
import {CoreModule} from '../core/core.module';
import { IdProofingComponent } from './pages/id-proofing/id-proofing.component';
import {RegCompleteComponent} from './pages/complete/reg-complete.component';
import { RegistrationContainerComponent } from './components/registration-container/registration-container.component';
import {FormsModule} from '@angular/forms';
import { RegLoginMfaComponent } from './components/reg-login-mfa/reg-login-mfa.component';
import { CollectionNoticeComponent } from './components/collection-notice/collection-notice.component';
import { TextMaskModule } from 'angular2-text-mask';
import {BcscLoginComponent} from './pages/bcsc-login/bcsc-login.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    RegistrationRoutingModule,
    TextMaskModule
  ],
  declarations: [
    NewAccountComponent,
    ProfileComponent,
    DocumentUploadComponent,
    SecurityComponent,
    IdProofingComponent,
    RegCompleteComponent,
    RegistrationContainerComponent,
    RegLoginMfaComponent,
    BcscLoginComponent,
    CollectionNoticeComponent
  ]
})
export class RegistrationModule { }
