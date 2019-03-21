import { Routes } from '@angular/router';
import { ProfileComponent } from '../components/profile/profile.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ProfessionalComponent } from '../components/professional/professional.component';
import { SelfDeclarationComponent } from '../components/self-declaration/self-declaration.component';
import { PharmanetAccessComponent } from '../components/pharmanet-access/pharmanet-access.component';
import { ReviewComponent } from '../components/review/review.component';

export const subRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'Profile' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact' }
  },
  {
    path: 'professional',
    component: ProfessionalComponent,
    data: { title: 'Professional' }
  },
  {
    path: 'self-declaration',
    component: SelfDeclarationComponent,
    data: { title: 'Self Declaration' }
  },
  {
    path: 'pharmanet-access',
    component: PharmanetAccessComponent,
    data: { title: 'Pharmanet Access' }
  },
  {
    path: 'review',
    component: ReviewComponent,
    data: { title: 'Review' }
  }
];
