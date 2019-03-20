import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrollmentModule } from './modules/enrollment/enrollment.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    EnrollmentModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
