import { NgModule } from '@angular/core';
import { PrimeCoreComponent } from './prime-core.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';
import { NameComponent } from './components/name/name.component';
import { SharedCoreModule } from 'moh-common-lib';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap';

const componentList = [
  PrimeCoreComponent,
  ProfileComponent
];

@NgModule({
  declarations: [
    componentList,
    AddressComponent,
    NameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    TextMaskModule,
    TypeaheadModule.forRoot(),
    SharedCoreModule
  ],
  exports: [componentList]
})
export class PrimeCoreModule { }
