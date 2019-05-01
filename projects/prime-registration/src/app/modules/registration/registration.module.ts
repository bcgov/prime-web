import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApplAccountComponent } from './components/appl-account/appl-account.component';
import { ApplSecurityComponent } from './components/appl-security/appl-security.component';
import { ApplDocUploadComponent } from './components/appl-doc-upload/appl-doc-upload.component';
import { SharedCoreModule } from 'moh-common-lib';
import { TypeaheadModule } from 'ngx-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { UniqueQuestionDirective } from './components/appl-account/unique-question.directive';
import { RegCacheService } from '@prime-registration/services/reg-cache.service';
import { ApplConfirmationComponent } from './components/appl-confirmation/appl-confirmation.component';
import { PrimeCoreModule, BASE_URL } from 'prime-core';
import { environment } from '../../../environments/environment';

const componentList = [
  ApplAccountComponent,
  ApplSecurityComponent,
  ApplDocUploadComponent,
  ApplConfirmationComponent,
  ConfirmModalComponent,
  UniqueQuestionDirective
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedCoreModule,
    HttpClientModule,
    TextMaskModule,
    TypeaheadModule.forRoot(),
    NgSelectModule,
    PrimeCoreModule
  ],
  declarations: [
    componentList
  ],
  exports: [
    componentList,
    PrimeCoreModule
  ],
  providers: [
    { provide: BASE_URL, useValue: environment.baseAPIUrl },
    RegCacheService,
  ],
  entryComponents: [ConfirmModalComponent]
})
export class RegistrationModule {}
