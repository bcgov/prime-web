import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcscRegistrationRoutingModule } from './bcsc-registration-routing.module';
import { RegistrationModule } from '../registration/registration.module';
import { SharedCoreModule } from 'moh-common-lib';
import { BcscProfileComponent } from './pages/bcsc-profile/bcsc-profile.component';
import { BcscContainerComponent } from './components/bcsc-container/bcsc-container.component';
import { BcscAccountComponent } from './pages/bcsc-account/bcsc-account.component';
import { FormsModule } from '@angular/forms';
import { PrimeSharedModule } from '@prime-core/prime-shared/prime-shared.module';

@NgModule({
  imports: [
    CommonModule,
    BcscRegistrationRoutingModule,
    RegistrationModule,
    SharedCoreModule,
    FormsModule,
    PrimeSharedModule
  ],
  declarations: [
    BcscContainerComponent,
    BcscProfileComponent,
    BcscAccountComponent
  ]
})
export class BcscRegistrationModule { }
