import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCoreModule } from 'moh-common-lib';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TypeaheadModule, BsDropdownModule } from 'ngx-bootstrap';
import { SharedProfileComponent } from './components/shared-profile/shared-profile.component';
import { LicenseComponent } from './components/license/license.component';
import { DeviceProviderComponent } from './components/device-provider/device-provider.component';
import { YesNoComponent } from './components/yes-no/yes-no.component';
import { DetailsComponent } from './components/details/details.component';
import { ActionBlockComponent } from './components/action-block/action-block.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListItemHeaderComponent } from './components/list-item-header/list-item-header.component';
import { ProfileBlockComponent } from './components/profile-block/profile-block.component';
import { AddressBlockComponent } from './components/address-block/address-block.component';
import { ContactBlockComponent } from './components/contact-block/contact-block.component';
import { SelfDeclarationQuestionBlockComponent } from './components/self-declaration-question-block/self-declaration-question-block.component';
import { ProfessionalInformationBlockComponent } from './components/professional-information-block/professional-information-block.component';
import { PharmanetBlockComponent } from './components/pharmanet-block/pharmanet-block.component';
import { PrimeSharedModule } from '../../../../../src/app/prime-shared/prime-shared.module';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { TextMaskModule } from 'angular2-text-mask';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { ErrorComponent } from './components/error-block/error.component';
import { EnrollmentConfirmationComponent } from './components/enrollment-confirmation/enrollment-confirmation.component';

@NgModule({
  declarations: [
    HomePageComponent,
    // ProfileComponent,
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
    MatDialogModule,
    MatCardModule,
    PrimeSharedModule,
    NgxMyDatePickerModule.forRoot(),
    TextMaskModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SharedCoreModule,
    NgSelectModule,
    HomePageComponent,
    SharedProfileComponent,
    LicenseComponent,
    DeviceProviderComponent,
    YesNoComponent,
    DetailsComponent,
    ActionBlockComponent,
    MatCardModule,
    ListItemComponent,
    ListItemHeaderComponent,
    ProfileBlockComponent,
    AddressBlockComponent,
    ContactBlockComponent,
    SelfDeclarationQuestionBlockComponent,
    ProfessionalInformationBlockComponent,
    PharmanetBlockComponent,
    PrimeSharedModule,
    NgxMyDatePickerModule,
    TextMaskModule,
    RadioButtonComponent,
    ErrorComponent,
    EnrollmentConfirmationComponent
  ]
})
export class SharedModule {}
