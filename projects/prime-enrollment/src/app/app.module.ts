import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrollmentModule } from './modules/enrollment/enrollment.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as version from '../../version.GENERATED';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    EnrollmentModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'APP_VERSION', useValue: version }
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
