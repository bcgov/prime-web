import { Routes } from '@angular/router';
import { ProfileComponent } from '../components/profile/profile.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ProfessionalComponent } from '../components/professional/professional.component';
import { SelfDeclarationComponent } from '../components/self-declaration/self-declaration.component';
import { PharmanetAccessComponent } from '../components/pharmanet-access/pharmanet-access.component';
import { ReviewComponent } from '../components/review/review.component';
import { StepperGuard } from '@prime-enrollment/core/guards/stepper.guard';

export const subRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [StepperGuard],
    data: { title: 'Profile' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [StepperGuard],
    data: { title: 'Contact' }
  },
  {
    path: 'professional',
    component: ProfessionalComponent,
    canActivate: [StepperGuard],
    data: { title: 'Professional' }
  },
  {
    path: 'self-declaration',
    component: SelfDeclarationComponent,
    canActivate: [StepperGuard],
    data: { title: 'Self Declaration' }
  },
  {
    path: 'pharmanet-access',
    component: PharmanetAccessComponent,
    canActivate: [StepperGuard],
    data: { title: 'Pharmanet Access' }
  },
  {
    path: 'review',
    component: ReviewComponent,
    canActivate: [StepperGuard],
    data: { title: 'Review' }
  }
];
