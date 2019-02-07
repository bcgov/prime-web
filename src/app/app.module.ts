import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** These imports will change when moved to moh-common-styles project */
import { FormActionBarComponent } from './shared-core/components/form-action-bar/form-action-bar.component';
import { PageFrameworkComponent } from './shared-core/components/page-framework/page-framework.component';
import { PasswordComponent } from './shared-core/components/password/password.component';
import { WizardProgressBarComponent } from './shared-core/wizard-progress-bar/wizard-progress-bar.component';
import { CoreBreadcrumbComponent } from './shared-core/core-breadcrumb/core-breadcrumb.component';
import { ProgressbarModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    PageFrameworkComponent,
    FormActionBarComponent,
    PasswordComponent,
    WizardProgressBarComponent,
    CoreBreadcrumbComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProgressbarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
