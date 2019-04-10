import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { fakeBackendProvider } from './fake-backend/fake-backend';

import { RegistrationModule } from './modules/registration/registration.module';
import { PrimeDataModule } from './modules/prime-data/prime-data.module';

/* moh-common-lib can be pulled from npm, or locally via npm link */
import { SharedCoreModule } from 'moh-common-lib';

/** Pages (Appl* will be removed later when registration flow coded - just page development) */
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoggerService } from './services/logger.service';

// List of providers for applicant
const providerList: any = [
  Title
];


/** Module that allows front-end development without having backend */
if ( environment.useMockBackend ) {
  providerList.push( fakeBackendProvider );
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RegistrationModule,
    PrimeDataModule.forRoot(),
    SharedCoreModule
  ],
  providers: [
    providerList,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
