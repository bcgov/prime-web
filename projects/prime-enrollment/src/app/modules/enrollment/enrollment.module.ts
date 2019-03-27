import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentRoutingModule } from './enrollment-routing.module';
import { EnrollmentComponent } from './enrollment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfessionalComponent } from './components/professional/professional.component';
import { SelfDeclarationComponent } from './components/self-declaration/self-declaration.component';
import { PharmanetAccessComponent } from './components/pharmanet-access/pharmanet-access.component';
import { ReviewComponent } from './components/review/review.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    EnrollmentComponent,
    ProfileComponent,
    ContactComponent,
    ProfessionalComponent,
    SelfDeclarationComponent,
    PharmanetAccessComponent,
    ReviewComponent
  ],
  imports: [CommonModule, EnrollmentRoutingModule, SharedModule],
  exports: []
})
export class EnrollmentModule {}
