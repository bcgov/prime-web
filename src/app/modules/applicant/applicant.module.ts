import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantDashboardComponent } from './pages/applicant-dashboard/applicant-dashboard.component';
import { ApplicantRoutingModule } from './applicant-routing.modules';
import { CoreModule } from '../core/core.module';
import { ApplicantContactComponent } from './pages/applicant-contact/applicant-contact.component';
import { ApplicantProfessionalComponent } from './pages/applicant-professional/applicant-professional.component';
import { ApplicantAccessAcceptanceComponent } from './pages/applicant-access-acceptance/applicant-access-acceptance.component';
import { FormsModule } from '@angular/forms';
import { ApplicantBreadcrumbsComponent } from './components/applicant-breadcrumbs/applicant-breadcrumbs.component';
import { ApplEnrollmentListComponent } from './components/appl-enrollment-list/appl-enrollment-list.component';
import { ApplEnrollmentRowComponent } from './components/appl-enrollment-row/appl-enrollment-row.component';
import { AlertModule } from 'ngx-bootstrap';
import { AppEnrollmentProgressRowComponent } from './components/app-enrollment-progress-row/app-enrollment-progress-row.component';
import { TextMaskModule } from 'angular2-text-mask';
import { ApplicantReviewPageComponent } from './pages/applicant-review-page/applicant-review-page.component';
import { CompleteSubmissionComponent} from './pages/complete-submission/complete-submission.component';

@NgModule({
  imports: [
    CommonModule,
    ApplicantRoutingModule,
    CoreModule,
    FormsModule,
    AlertModule,
    TextMaskModule
  ],
  declarations: [
    ApplicantDashboardComponent,
    ApplicantContactComponent,
    ApplicantProfessionalComponent,
    ApplicantAccessAcceptanceComponent,
    ApplicantBreadcrumbsComponent,
    ApplEnrollmentListComponent,
    ApplEnrollmentRowComponent,
    AppEnrollmentProgressRowComponent,
    ApplicantReviewPageComponent,
    CompleteSubmissionComponent
  ]
})
export class ApplicantModule { }
