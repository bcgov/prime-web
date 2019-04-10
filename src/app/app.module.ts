import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* moh-common-lib can be pulled from npm, or locally via npm link */
import { SharedCoreModule } from 'moh-common-lib';

// List of providers for applicant
const providerList: any = [Title];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SharedCoreModule],
  providers: [providerList],
  bootstrap: [AppComponent]
})
export class AppModule {}
