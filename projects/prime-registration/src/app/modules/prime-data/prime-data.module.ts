import { NgModule, ModuleWithProviders } from '@angular/core';
import { PrimeDataService } from '../../services/prime-data.service';

@NgModule({})
export class PrimeDataModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PrimeDataModule,
      providers: [PrimeDataService]
     };
  }
}
