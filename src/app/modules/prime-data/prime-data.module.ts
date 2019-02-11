import { NgModule, ModuleWithProviders } from '@angular/core';
import { PrimeDataService } from 'src/app/services/prime-data.service';

@NgModule({})
export class PrimeDataModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PrimeDataModule,
      providers: [PrimeDataService]

     };
  }
}
