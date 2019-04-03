import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCoreModule } from 'moh-common-lib';
import { ProfileComponent } from '../../../../../projects/prime-registration/src/app/modules/registration/components/profile/profile.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EnrollmentProfileComponent } from './components/enrollment-profile/enrollment-profile.component';
import { NameComponent } from '../../../../../projects/prime-registration/src/app/modules/registration/components/name/name.component';
import { AddressComponent } from '../../../../../projects/prime-registration/src/app/modules/registration/components/address/address.component';
import { PageSectionsComponent } from '../../../../../projects/prime-registration/src/app/modules/registration/components/page-sections/page-sections.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TypeaheadModule, BsDropdownModule } from 'ngx-bootstrap';
import {
  NgxIntlTelInputModule,
  NgxIntlTelInputComponent
} from 'ngx-intl-tel-input';
import { PhoneInputComponent } from './components/phone-input/phone-input.component';
import { SharedProfileComponent } from './components/shared-profile/shared-profile.component';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
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
import { SelfDeclarationBlockComponent } from './components/self-declaration-block/self-declaration-block.component';
import { SelfDeclarationQuestionBlockComponent } from './components/self-declaration-question-block/self-declaration-question-block.component';
import { ProfessionalInformationBlockComponent } from './components/professional-information-block/professional-information-block.component';
import { PharmanetBlockComponent } from './components/pharmanet-block/pharmanet-block.component';

@NgModule({
  declarations: [
    HomePageComponent,
    EnrollmentProfileComponent,
    ProfileComponent,
    NameComponent,
    AddressComponent,
    PageSectionsComponent,
    PhoneInputComponent,
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
    SelfDeclarationBlockComponent,
    SelfDeclarationQuestionBlockComponent,
    ProfessionalInformationBlockComponent,
    PharmanetBlockComponent
  ],

  imports: [
    CommonModule,
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    SharedCoreModule,
    NgxIntlTelInputModule,
    InternationalPhoneNumberModule,
    MatDialogModule,
    MatCardModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SharedCoreModule,
    NgSelectModule,
    HomePageComponent,
    EnrollmentProfileComponent,
    PhoneInputComponent,
    SharedProfileComponent,
    NgxIntlTelInputComponent,
    InternationalPhoneNumberModule,
    LicenseComponent,
    DeviceProviderComponent,
    YesNoComponent,
    DetailsComponent,
    PageSectionsComponent,
    ActionBlockComponent,
    MatCardModule,
    ListItemComponent,
    ListItemHeaderComponent,
    ProfileBlockComponent,
    AddressBlockComponent,
    ContactBlockComponent,
    SelfDeclarationBlockComponent,
    SelfDeclarationQuestionBlockComponent,
    ProfessionalInformationBlockComponent,
    PharmanetBlockComponent
  ]
})
export class SharedModule {}
