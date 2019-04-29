import { Routes } from '@angular/router';
import { ProfileComponent } from '../components/profile/profile.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ProfessionalComponent } from '../components/professional/professional.component';
import { SelfDeclarationComponent } from '../components/self-declaration/self-declaration.component';
import { PharmanetAccessComponent } from '../components/pharmanet-access/pharmanet-access.component';
import { ReviewComponent } from '../components/review/review.component';
import { StepperGuard } from '@prime-enrollment/core/guards/stepper.guard';
import { EnrolmentConstants } from '@prime-enrollment/modules/enrollment/models/enrolment-constants.model';


export const subRoutes: Routes = [
  {
    path: EnrolmentConstants.PROFILE_PG,
    component: ProfileComponent,
    canActivate: [StepperGuard],
    data: { title: 'Profile' }
  },
  {
    path: EnrolmentConstants.CONTACT_PG,
    component: ContactComponent,
    canActivate: [StepperGuard],
    data: { title: 'Contact' }
  },
  {
    path: EnrolmentConstants.PROFESSIONAL_PG,
    component: ProfessionalComponent,
    canActivate: [StepperGuard],
    data: { title: 'Professional' }
  },
  {
    path: EnrolmentConstants.SELF_DEC_PG,
    component: SelfDeclarationComponent,
    canActivate: [StepperGuard],
    data: { title: 'Self Declaration' }
  },
  {
    path: EnrolmentConstants.PHARMANET_PG,
    component: PharmanetAccessComponent,
    canActivate: [StepperGuard],
    data: { title: 'Pharmanet Access' }
  },
  {
    path: EnrolmentConstants.REVIEW_PG,
    component: ReviewComponent,
    canActivate: [StepperGuard],
    data: { title: 'Review' }
  }
];

export function mappedRoutes(routes: Routes, prefix: string) {
  return routes.map(itm => `/${prefix}/${itm.path}`);
}
