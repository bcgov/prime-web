import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* moh-common-lib can be pulled from npm, or locally via npm link */
import { SharedCoreModule } from 'moh-common-lib';

/** Pages (Appl* will be removed later when registration flow coded - just page development) */
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// List of providers for applicant
const providerList: any = [Title];

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SharedCoreModule, BrowserAnimationsModule],
  providers: [providerList],
  bootstrap: [AppComponent]
})
export class AppModule {}
