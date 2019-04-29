import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrolmentModule } from './modules/enrolment/enrolment.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, EnrolmentModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CoreModule]
})
export class AppModule {}
