import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeCoreModule } from 'prime-core';
import { SharedCoreModule } from 'moh-common-lib';

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimeCoreModule, SharedCoreModule],
  exports: [PrimeCoreModule, SharedCoreModule]
})
export class CoreModule {}
