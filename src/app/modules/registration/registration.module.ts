import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { ApplProfileComponent } from './components/appl-profile/appl-profile.component';
import { ApplAccountComponent } from './components/appl-account/appl-account.component';
import { ApplSecurityComponent } from './components/appl-security/appl-security.component';
import { ApplDocUploadComponent } from './components/appl-doc-upload/appl-doc-upload.component';

import { ProgressbarModule } from 'ngx-bootstrap';

/** These imports will change when moved to moh-common-styles project */
import { WizardProgressBarComponent } from '../../shared-core/components/wizard-progress-bar/wizard-progress-bar.component';
import { CoreBreadcrumbComponent } from '../../shared-core/components/core-breadcrumb/core-breadcrumb.component';
import { PrimeContainerComponent } from '../core/prime-container/prime-container.component';
import { PageFrameworkComponent } from '../../shared-core/components/page-framework/page-framework.component';
import { FormActionBarComponent } from '../../shared-core/components/form-action-bar/form-action-bar.component';



@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ProgressbarModule.forRoot()
  ],
  declarations: [
    // ApplProfileComponent,
    // ApplAccountComponent,
    // ApplSecurityComponent,
    // ApplDocUploadComponent,
    // PageFrameworkComponent,
    // FormActionBarComponent,
    WizardProgressBarComponent,
    CoreBreadcrumbComponent,
    PrimeContainerComponent
  ]
})
export class RegistrationModule { }
