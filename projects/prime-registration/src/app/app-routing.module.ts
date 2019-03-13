import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ApplDocUploadComponent } from './modules/registration/components/appl-doc-upload/appl-doc-upload.component';
import { ApplAccountComponent } from './modules/registration/components/appl-account/appl-account.component';
import { ApplSecurityComponent } from './modules/registration/components/appl-security/appl-security.component';
import { MohProfileComponent } from './modules/moh-registration/pages/moh-profile/moh-profile.component';
import { BcscProfileComponent } from './modules/bcsc-registration/pages/bcsc-profile/bcsc-profile.component';
import { ApplConfirmationComponent } from './modules/registration/components/appl-confirmation/appl-confirmation.component';
import { PrimeConstants } from './models/prime-constants';
// import { BcscRegistrationModule } from './modules/bcsc-registration/bcsc-registration.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: { title: 'Home'}
  },

  // Lazy loading modules below
  {
    path: PrimeConstants.MOH_REGISTRATION,
    // loadChildren: 'app/modules/moh-registration/moh-registration.module#MohRegistrationModule'
    loadChildren: './modules/moh-registration/moh-registration.module#MohRegistrationModule'

  },
  {
    path: PrimeConstants.BCSC_REGISTRATION,
    // loadChildren: 'app/modules/bcsc-registration/bcsc-registration.module#BcscRegistrationModule'
    loadChildren: './modules/bcsc-registration/bcsc-registration.module#BcscRegistrationModule'

  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
