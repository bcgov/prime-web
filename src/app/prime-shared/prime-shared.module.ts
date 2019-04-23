import { NgModule } from '@angular/core';
import { SharedCoreModule } from 'moh-common-lib';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';
import { TypeaheadModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';


const componentList = [

  ConfirmationComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedCoreModule,
    HttpClientModule,
    TextMaskModule,
    TypeaheadModule.forRoot(),
    NgSelectModule,
  ],
  declarations: [
    componentList
  ],
  exports: [
    componentList
  ],
})
export class PrimeSharedModule { }
