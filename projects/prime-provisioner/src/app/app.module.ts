import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { EnrolmentModule } from './modules/enrolment/enrolment.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EnrolmentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ProfileComponent]
})
export class AppModule { }
