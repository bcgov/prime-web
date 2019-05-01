import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeCoreModule } from 'prime-core';
import { SharedCoreModule } from 'moh-common-lib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimeCoreModule,
    SharedCoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TextMaskModule
  ],
  exports: [
    PrimeCoreModule,
    SharedCoreModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ]
})
export class CoreModule {}
