import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCoreModule } from 'moh-common-lib';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationModule } from '../../../../../projects/prime-registration/src/app/modules/registration/registration.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, SharedCoreModule, RegistrationModule],
  exports: [SharedCoreModule, HomePageComponent]
})
export class SharedModule {}
