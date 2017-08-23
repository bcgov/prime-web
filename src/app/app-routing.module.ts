import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { CustomerComponent } from 'app/customer/customer.component';
import { ProfessionalInfoComponent } from './pages/professional-info/professional-info.component';
import { ConsentModalComponent } from './core/consent-modal/consent-modal.component';

import { ContactInformationComponent } from './pages/contact-information/contact-information.component'
import { ReviewSubmitComponent } from './pages/review-submit/review-submit.component';
import { SelfDeclarationComponent } from './pages/self-declaration/self-declaration.component';
import { UserAcceptanceComponent } from './pages/user-acceptance/user-acceptance.component';
import { SiteAccessComponent } from './pages/site-access/site-access.component';

const routes: Routes = [
  {
    path: '',

    //toggle below to work on prepare again
    // children: [],
    canActivate: [],
    // redirectTo: 'prepare',
    redirectTo: 'professional-info',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      breadcrumb: 'Dashboard'
    }
  },
  {
    path: 'professional-info',
    component: ProfessionalInfoComponent,
  },
  {
    path: 'prepare',
    component: ConsentModalComponent,
  },
  {
    path: 'site-access',
    component: SiteAccessComponent,
  },
  {
    path: 'contact-info',
    component: ContactInformationComponent
  },
  {
    path: 'self-declaration',
    component: SelfDeclarationComponent
  },
  {
    path: 'user-acceptance',
    component: UserAcceptanceComponent
  },
  {
    path: 'review-submit',
    component: ReviewSubmitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
