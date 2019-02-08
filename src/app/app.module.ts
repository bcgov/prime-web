import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { fakeBackendProvider } from './fake-backend/fake-backend';

import { RegistrationModule } from './modules/registration/registration.module';

/** These imports will change when moved to moh-common-styles project */
import { SharedCoreModule } from './shared-core/shared-core.module';

/** Pages (Appl* will be removed later when registration flow coded - just page development) */
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BcscProfileComponent } from './modules/bcsc-registration/pages/bcsc-profile/bcsc-profile.component';

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
    SharedCoreModule
  ],
  providers: [
    providerList
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
