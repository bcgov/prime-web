import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';
import { NameComponent } from './components/name/name.component';
import { SharedCoreModule } from 'moh-common-lib';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProfileBlockComponent } from './components/profile-block/profile-block.component';
import { ContactBlockComponent } from './components/contact-block/contact-block.component';
// tslint:disable-next-line: max-line-length
import { SelfDeclarationQuestionBlockComponent } from './components/self-declaration-question-block/self-declaration-question-block.component';

const componentList = [
  AddressComponent,
  NameComponent,
  ProfileComponent,
  PhoneNumberComponent,
  ConfirmationComponent,
  ProfileBlockComponent,
  ContactBlockComponent,
  SelfDeclarationQuestionBlockComponent
];
@NgModule({
  declarations: [componentList],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    TextMaskModule,
    TypeaheadModule.forRoot(),
    SharedCoreModule
  ],
  exports: [componentList]
})
export class PrimeCoreModule {}
