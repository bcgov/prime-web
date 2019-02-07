import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { fakeBackendProvider } from './fake-backend/fake-backend';

/** These imports will change when moved to moh-common-styles project */
import { PasswordComponent } from './shared-core/components/password/password.component';


/** Pages (Appl* will be removed later when registration flow coded - just page development) */
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ApplProfileComponent } from './modules/registration/components/appl-profile/appl-profile.component';
import { ApplAccountComponent } from './modules/registration/components/appl-account/appl-account.component';
import { ApplSecurityComponent } from './modules/registration/components/appl-security/appl-security.component';
import { ApplDocUploadComponent } from './modules/registration/components/appl-doc-upload/appl-doc-upload.component';
import { PageFrameworkComponent } from './shared-core/components/page-framework/page-framework.component';
import { FormActionBarComponent } from './shared-core/components/form-action-bar/form-action-bar.component';

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
    PasswordComponent,
    HomePageComponent,

    ApplProfileComponent,
    ApplAccountComponent,
    ApplSecurityComponent,
    ApplDocUploadComponent,
    PageFrameworkComponent,
    FormActionBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    providerList
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
