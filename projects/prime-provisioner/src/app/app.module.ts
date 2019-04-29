import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrolmentModule } from './modules/enrolment/enrolment.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, EnrolmentModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
