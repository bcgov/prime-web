import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewAccountComponent} from './pages/new-account/new-account.component';
import {IdProofingComponent} from './pages/id-proofing/id-proofing.component';
import {RegCompleteComponent} from './pages/complete/reg-complete.component';
import {RegistrationContainerComponent} from './components/registration-container/registration-container.component';
import {pageRoutes} from './registration-page-routing.module';
import {BcscLoginComponent} from './pages/bcsc-login/bcsc-login.component';

export const routes: Routes = [
  {
    path: 'id-proofing',
    component: IdProofingComponent,
  },
  {
    path: 'new-account',
    component: NewAccountComponent,
  },
  {
    path: 'registration-complete',
    component: RegCompleteComponent
  },
  {
    path: 'bcsc-login',
    component: BcscLoginComponent
  },
  {
    path: '',
    component: RegistrationContainerComponent,
    children: pageRoutes
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
