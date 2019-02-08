import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MohRegistrationRoutingModule } from './moh-registration-routing.module';
import { MohProfileComponent } from './pages/moh-profile/moh-profile.component';
import { RegistrationModule } from '../registration/registration.module';
import { SharedCoreModule } from '../../shared-core/shared-core.module';

@NgModule({
  imports: [
    CommonModule,
    MohRegistrationRoutingModule,
    RegistrationModule,
    SharedCoreModule
  ],
  declarations: [
    MohProfileComponent
  ]
})
export class MohRegistrationModule { }
