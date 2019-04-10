import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegistrationConstants } from './modules/registration/models/registration-constants.model';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: { title: 'Home' }
  },

  // Lazy loading modules below
  {
    path: RegistrationConstants.MOH_REGISTRATION,
    loadChildren:
      './modules/moh-registration/moh-registration.module#MohRegistrationModule'
  },
  {
    path: RegistrationConstants.BCSC_REGISTRATION,
    loadChildren:
      './modules/bcsc-registration/bcsc-registration.module#BcscRegistrationModule'
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
export class AppRoutingModule {}
