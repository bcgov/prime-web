import { NgModule } from '@angular/core';
import { AddressComponent } from './components/address/address.component';
import { NameComponent } from './components/name/name.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageSectionsComponent } from './components/page-sections/page-sections.component';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';
import { SharedCoreModule } from 'moh-common-lib';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';
import { TypeaheadModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


const componentList = [
  AddressComponent,
  NameComponent,
  ProfileComponent,
  PageSectionsComponent,
  PhoneNumberComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedCoreModule,
    HttpClientModule,
    TextMaskModule,
    TypeaheadModule.forRoot(),
    NgSelectModule
  ],
  declarations: [
    componentList
  ],
  exports: [
    componentList
  ],
})
export class PrimeSharedModule { }
