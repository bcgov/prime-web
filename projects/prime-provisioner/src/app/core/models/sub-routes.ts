import { Routes } from '@angular/router';
import { StepperGuard } from '../guards/stepper.guard';
import { ProvisionerConstants } from './provisioner-constants.model';
import { ProfileComponent } from '@prime-prov/modules/enrolment/pages/profile/profile.component';
import { ContactComponent } from '@prime-prov/modules/enrolment/pages/contact/contact.component';
import { SelfDeclarationComponent } from '@prime-prov/modules/enrolment/pages/self-declaration/self-declaration.component';
import { ReviewComponent } from '@prime-prov/modules/enrolment/pages/review/review.component';
import { OrganizationComponent } from '@prime-prov/modules/enrolment/pages/organization/organization.component';

export const subRoutes: Routes = [
  {
    path: ProvisionerConstants.PROFILE_PG,
    component: ProfileComponent,
    canActivate: [StepperGuard],
    data: { title: 'Profile' }
  },
  {
    path: ProvisionerConstants.CONTACT_PG,
    component: ContactComponent,
    canActivate: [StepperGuard],
    data: { title: 'Contact' }
  },
  {
    path: ProvisionerConstants.SELF_DEC_PG,
    component: SelfDeclarationComponent,
    canActivate: [StepperGuard],
    data: { title: 'Self Declaration' }
  },
  {
    path: ProvisionerConstants.ORGANIZATION_PG,
    component: OrganizationComponent,
    canActivate: [StepperGuard],
    data: { title: 'Pharmanet Access' }
  },
  {
    path: ProvisionerConstants.REVIEW_PG,
    component: ReviewComponent,
    canActivate: [StepperGuard],
    data: { title: 'Review' }
  }
];

export function mappedRoutes(routes: Routes, prefix: string) {
  return routes.map(itm => `/${prefix}/${itm.path}`);
}
