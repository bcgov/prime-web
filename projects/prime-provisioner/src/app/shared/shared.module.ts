import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { RadioControlComponent } from './components/radio-control/radio-control.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { DeclarationQuestionComponent } from './components/declaration-question/declaration-question.component';
import { PanelComponent } from './components/panel/panel.component';
import { ErrorComponent } from './components/error/error.component';
import { AddressBlockComponent } from './components/address-block/address-block.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    RadioControlComponent,
    SubheaderComponent,
    DeclarationQuestionComponent,
    PanelComponent,
    ErrorComponent,
    AddressBlockComponent
  ],
  imports: [CommonModule],
  exports: [
    PageHeaderComponent,
    RadioControlComponent,
    SubheaderComponent,
    DeclarationQuestionComponent,
    PanelComponent,
    ErrorComponent,
    AddressBlockComponent
  ]
})
export class SharedModule {}
