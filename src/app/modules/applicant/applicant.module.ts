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
import { ApplicantSelfDeclarationComponent } from './pages/applicant-self-declaration/applicant-self-declaration.component';

@NgModule({
  imports: [
    CommonModule,
    ApplicantRoutingModule,
    CoreModule,
    FormsModule,
    AlertModule
  ],
  declarations: [
    ApplicantDashboardComponent,
    ApplicantContactComponent,
    ApplicantProfessionalComponent,
    ApplicantSelfDeclarationComponent,
    ApplicantAccessAcceptanceComponent,
    ApplicantBreadcrumbsComponent,
    ApplEnrollmentListComponent,
    ApplEnrollmentRowComponent
  ]
})
export class ApplicantModule { }
