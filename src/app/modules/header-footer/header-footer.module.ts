import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeHeaderComponent } from './prime-header/prime-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PrimeHeaderComponent],
  exports: [PrimeHeaderComponent]
})
export class HeaderFooterModule { }
