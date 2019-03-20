import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrollmentModule } from './modules/enrollment/enrollment.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],

  imports: [BrowserModule, AppRoutingModule, SharedModule, EnrollmentModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
