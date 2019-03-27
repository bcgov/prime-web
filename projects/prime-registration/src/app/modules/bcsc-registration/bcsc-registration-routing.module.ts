import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BcscContainerComponent } from './components/bcsc-container/bcsc-container.component';
import { bcscPages } from './bcsc-registration-page-routing.module';
import { RegistrationConstants } from '../registration/models/registration-constants.model';
import { ApplConfirmationComponent } from '../registration/components/appl-confirmation/appl-confirmation.component';

const routes: Routes = [
  {
    path: '',
    component: BcscContainerComponent,
    children: bcscPages
  },
  {
    path: RegistrationConstants.CONFIRMATION_PG,
    component: ApplConfirmationComponent,
    data: { title: 'BCSC Registration Confirmation'}
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
export class BcscRegistrationRoutingModule { }
