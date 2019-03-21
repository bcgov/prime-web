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
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { PhoneInputComponent } from './components/phone-input/phone-input.component';

@NgModule({
  declarations: [
    HomePageComponent,
    EnrollmentProfileComponent,
    ProfileComponent,
    NameComponent,
    AddressComponent,
    PageSectionsComponent,
    PhoneInputComponent
  ],

  imports: [
    CommonModule,
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    SharedCoreModule,
    NgxIntlTelInputModule
  ],
  exports: [
    FormsModule,
    SharedCoreModule,
    NgSelectModule,
    HomePageComponent,
    EnrollmentProfileComponent,
    PhoneInputComponent
  ]
})
export class SharedModule {}
