import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeCoreModule } from 'prime-core';
import { SharedCoreModule } from 'moh-common-lib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimeCoreModule,
    SharedCoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [PrimeCoreModule, SharedCoreModule, FormsModule, ReactiveFormsModule]
})
export class CoreModule {}
