import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { RadioControlComponent } from './components/radio-control/radio-control.component';
import { SubheaderComponent } from './components/subheader/subheader.component';

@NgModule({
  declarations: [PageHeaderComponent, RadioControlComponent, SubheaderComponent],
  imports: [
    CommonModule
  ],
  exports: [PageHeaderComponent, RadioControlComponent, SubheaderComponent]
})
export class SharedModule { }
