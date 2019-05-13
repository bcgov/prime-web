import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrolmentModule } from './modules/enrolment/enrolment.module';
import { CoreModule } from './core/core.module';
import { BASE_URL } from 'prime-core';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, EnrolmentModule],
  providers: [
    {
      provide: BASE_URL,
      useValue: environment.baseAPIUrl
    }
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
