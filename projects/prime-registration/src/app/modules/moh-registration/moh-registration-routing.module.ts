import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MohContainerComponent } from './components/moh-container/moh-container.component';
import { mohPages } from './moh-registration-page-routing.module';
import { MohConfirmationComponent } from './pages/moh-confirmation/moh-confirmation.component';
import { PrimeConstants } from '../../models/prime-constants';

export const routes: Routes = [
  {
    path: '',
    component: MohContainerComponent,
    children: mohPages
  },
  {
    path: PrimeConstants.CONFIRMATION_PG,
    component: MohConfirmationComponent,
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
