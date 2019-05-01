import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { RadioControlComponent } from './components/radio-control/radio-control.component';

@NgModule({
  declarations: [PageHeaderComponent, RadioControlComponent],
  imports: [
    CommonModule
  ],
  exports: [PageHeaderComponent, RadioControlComponent]
})
export class SharedModule { }
