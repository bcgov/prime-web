import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCoreModule } from 'moh-common-lib';
import { ProfileComponent } from '../../../../../projects/prime-registration/src/app/modules/registration/components/profile/profile.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EnrollmentProfileComponent } from './components/enrollment-profile/enrollment-profile.component';
import { NameComponent } from '../../../../../projects/prime-registration/src/app/modules/registration/components/name/name.component';
import { AddressComponent } from '../../../../../projects/prime-registration/src/app/modules/registration/components/address/address.component';
import { PageSectionsComponent } from '../../../../../projects/prime-registration/src/app/modules/registration/components/page-sections/page-sections.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TypeaheadModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    HomePageComponent,
    EnrollmentProfileComponent,
    ProfileComponent,
    NameComponent,
    AddressComponent,
    PageSectionsComponent
  ],

  imports: [
    CommonModule,
    TypeaheadModule.forRoot(),
    FormsModule,
    NgSelectModule,
    SharedCoreModule
  ],
  exports: [
    FormsModule,
    SharedCoreModule,
    NgSelectModule,
    HomePageComponent,
    EnrollmentProfileComponent
  ]
})
export class SharedModule {}
