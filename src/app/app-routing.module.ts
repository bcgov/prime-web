import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalInfoComponent } from './pages/professional-info/professional-info.component';
import { ConsentModalComponent } from './core/consent-modal/consent-modal.component';

import { ContactInformationComponent } from './pages/contact-information/contact-information.component'
import { ReviewSubmitComponent } from './pages/review-submit/review-submit.component';
import { SelfDeclarationComponent } from './pages/self-declaration/self-declaration.component';
import { UserAcceptanceComponent } from './pages/user-acceptance/user-acceptance.component';
import { SiteAccessComponent } from './pages/site-access/site-access.component';

const routes: Routes = [
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
  },
  {
    path: '**',
    redirectTo: 'professional-info'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
