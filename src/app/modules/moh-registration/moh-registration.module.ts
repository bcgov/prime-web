import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MohRegistrationRoutingModule } from './moh-registration-routing.module';
import { MohProfileComponent } from './pages/moh-profile/moh-profile.component';
import { RegistrationModule } from '../registration/registration.module';
// import { SharedCoreModule } from '../../shared-core/shared-core.module';
import { SharedCoreModule } from 'moh-common-lib';
import { MohContainerComponent } from './components/moh-container/moh-container.component';
import { MohAccountComponent } from './pages/moh-account/moh-account.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedCoreModule,
    MohRegistrationRoutingModule,
    RegistrationModule,
    FormsModule
  ],
  declarations: [
    MohContainerComponent,
    MohProfileComponent,
    MohAccountComponent
  ]
})
export class MohRegistrationModule { }
