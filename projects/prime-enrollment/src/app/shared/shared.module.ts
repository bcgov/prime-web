import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCoreModule } from 'moh-common-lib';
import { RegistrationModule } from '../../../../../projects/prime-registration/src/app/modules/registration/registration.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EnrollmentProfileComponent } from './components/enrollment-profile/enrollment-profile.component';

@NgModule({
  declarations: [HomePageComponent, EnrollmentProfileComponent],
  imports: [CommonModule, SharedCoreModule, RegistrationModule],
  exports: [SharedCoreModule, HomePageComponent, EnrollmentProfileComponent]
})
export class SharedModule {}
