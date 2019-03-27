import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MohContainerComponent } from './components/moh-container/moh-container.component';
import { mohPages } from './moh-registration-page-routing.module';
import { RegistrationConstants } from '../registration/models/registration-constants.model';
import { ApplConfirmationComponent } from '../registration/components/appl-confirmation/appl-confirmation.component';

export const routes: Routes = [
  {
    path: '',
    component: MohContainerComponent,
    children: mohPages
  },
  {
    path: RegistrationConstants.CONFIRMATION_PG,
    component: ApplConfirmationComponent,
    data: { title: 'MoH Registration Confirmation'}
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MohRegistrationRoutingModule { }
