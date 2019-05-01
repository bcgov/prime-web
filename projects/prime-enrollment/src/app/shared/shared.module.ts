import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCoreModule } from 'moh-common-lib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TypeaheadModule, BsDropdownModule } from 'ngx-bootstrap';
import { SharedProfileComponent } from './components/shared-profile/shared-profile.component';
import { LicenseComponent } from './components/license/license.component';
import { DeviceProviderComponent } from './components/device-provider/device-provider.component';
import { YesNoComponent } from './components/yes-no/yes-no.component';
import { DetailsComponent } from './components/details/details.component';
import { ActionBlockComponent } from './components/action-block/action-block.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListItemHeaderComponent } from './components/list-item-header/list-item-header.component';
import { ProfileBlockComponent } from './components/profile-block/profile-block.component';
import { AddressBlockComponent } from './components/address-block/address-block.component';
import { ContactBlockComponent } from './components/contact-block/contact-block.component';
import {
  SelfDeclarationQuestionBlockComponent
} from './components/self-declaration-question-block/self-declaration-question-block.component';
import {
  ProfessionalInformationBlockComponent
 } from './components/professional-information-block/professional-information-block.component';
import { PharmanetBlockComponent } from './components/pharmanet-block/pharmanet-block.component';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { TextMaskModule } from 'angular2-text-mask';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { ErrorComponent } from './components/error-block/error.component';
import { EnrollmentConfirmationComponent } from './components/enrollment-confirmation/enrollment-confirmation.component';
import { PrimeCoreModule, BASE_URL } from 'prime-core';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    SharedProfileComponent,
    LicenseComponent,
    DeviceProviderComponent,
    YesNoComponent,
    DetailsComponent,
    ActionBlockComponent,
    ListItemComponent,
    ListItemHeaderComponent,
    ProfileBlockComponent,
    AddressBlockComponent,
    ContactBlockComponent,
    SelfDeclarationQuestionBlockComponent,
    ProfessionalInformationBlockComponent,
    PharmanetBlockComponent,
    RadioButtonComponent,
    ErrorComponent,
    EnrollmentConfirmationComponent
  ],

  imports: [
    CommonModule,
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    SharedCoreModule,
    NgxMyDatePickerModule.forRoot(),
    TextMaskModule,
    PrimeCoreModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SharedCoreModule,
    NgSelectModule,
    SharedProfileComponent,
    LicenseComponent,
    DeviceProviderComponent,
    YesNoComponent,
    DetailsComponent,
    ActionBlockComponent,
    ListItemComponent,
    ListItemHeaderComponent,
    ProfileBlockComponent,
    AddressBlockComponent,
    ContactBlockComponent,
    SelfDeclarationQuestionBlockComponent,
    ProfessionalInformationBlockComponent,
    PharmanetBlockComponent,
    NgxMyDatePickerModule,
    TextMaskModule,
    RadioButtonComponent,
    ErrorComponent,
    EnrollmentConfirmationComponent,
    PrimeCoreModule
  ],
  providers: [
    { provide: BASE_URL, useValue: environment.baseAPIUrl }
  ]
})
export class SharedModule {}
