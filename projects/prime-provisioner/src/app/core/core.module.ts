import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeCoreModule } from 'prime-core';
import { SharedCoreModule } from 'moh-common-lib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProfileBlockComponent } from '../../../../prime-core/src/lib/components/profile-block/profile-block.component';
import { ContactBlockComponent } from '../../../../prime-core/src/lib/components/contact-block/contact-block.component';
// tslint:disable-next-line: max-line-length
import { SelfDeclarationQuestionBlockComponent } from '../../../../prime-core/src/lib/components/self-declaration-question-block/self-declaration-question-block.component';

@NgModule({
  declarations: [
    ProfileBlockComponent,
    ContactBlockComponent,
    SelfDeclarationQuestionBlockComponent
  ],
  imports: [
    CommonModule,
    PrimeCoreModule,
    SharedCoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TextMaskModule,
    NgSelectModule
  ],
  exports: [
    PrimeCoreModule,
    SharedCoreModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgSelectModule,
    ProfileBlockComponent,
    ContactBlockComponent,
    SelfDeclarationQuestionBlockComponent
  ]
})
export class CoreModule {}
