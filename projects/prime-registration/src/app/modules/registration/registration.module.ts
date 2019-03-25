import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApplAccountComponent } from './components/appl-account/appl-account.component';
import { ApplSecurityComponent } from './components/appl-security/appl-security.component';
import { ApplDocUploadComponent } from './components/appl-doc-upload/appl-doc-upload.component';
import { SharedCoreModule } from 'moh-common-lib';
import { ApplConfirmationComponent } from './components/appl-confirmation/appl-confirmation.component';
import { TypeaheadModule } from 'ngx-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { UniqueQuestionDirective } from './components/appl-account/unique-question.directive';
import { PrimeSharedModule } from '../../../../../../src/app/prime-shared/prime-shared.module';


const componentList = [
  ApplAccountComponent,
  ApplSecurityComponent,
  ApplDocUploadComponent,
  ApplConfirmationComponent,
  ConfirmModalComponent,
  UniqueQuestionDirective,
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
    PrimeSharedModule
  ],
  declarations: [
    componentList
  ],
  exports: [
    componentList
  ],
  entryComponents: [ConfirmModalComponent]
})
export class RegistrationModule {}
