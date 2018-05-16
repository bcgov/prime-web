import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeDataService } from '../../services/prime-data.service';


/**
 * This module, specifically forRoot(), allows us to share the PrimeDataService
 * across feature modules. Without it, each module would have its own data
 * service and they couldn't speak to each other.
 */
@NgModule({})
export class PrimeDataModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PrimeDataModule,
      providers: [PrimeDataService]
    }
  }
}
