import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** These imports will change when moved to moh-common-styles project */
import { FormActionBarComponent } from './shared-core/components/form-action-bar/form-action-bar.component';
import { PageFrameworkComponent } from './shared-core/components/page-framework/page-framework.component';
import { PasswordComponent } from './shared-core/components/password/password.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageFrameworkComponent,
    FormActionBarComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
