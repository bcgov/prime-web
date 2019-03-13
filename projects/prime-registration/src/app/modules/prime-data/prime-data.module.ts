import { NgModule, ModuleWithProviders } from '@angular/core';
import { RegistrationDataService } from '@prime-registration/services/registration-data.service';

@NgModule({})
export class PrimeDataModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PrimeDataModule,
      providers: [RegistrationDataService]
     };
  }
}
