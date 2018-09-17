import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantDashboardComponent } from './pages/applicant-dashboard/applicant-dashboard.component';
import { ApplicantContactComponent } from './pages/applicant-contact/applicant-contact.component';
import { ApplicantAccessAcceptanceComponent } from './pages/applicant-access-acceptance/applicant-access-acceptance.component';
import { ApplicantProfessionalComponent } from './pages/applicant-professional/applicant-professional.component';
import { ApplicantReviewPageComponent } from './pages/applicant-review-page/applicant-review-page.component';
import { PharmaNetPageComponent } from './pages/pharma-net-page/pharma-net-page.component';



export const routes: Routes = [
  {
    path: 'dashboard',
    component: ApplicantDashboardComponent,
  },
  {
    path: 'contact',
    component: ApplicantContactComponent,
  },
  {
    path: 'access-acceptance',
    component: ApplicantAccessAcceptanceComponent,
  },
  {
    path: 'pharma-net',
    component: PharmaNetPageComponent
  },
  {
    path: 'professional',
    component: ApplicantProfessionalComponent,
  },
  {
    path: 'review',
    component: ApplicantReviewPageComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
