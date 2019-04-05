import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PrimeConstants } from '@prime-core/models/prime-constants';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: { title: 'Home' }
  },

  // Lazy loading modules below
  {
    path: PrimeConstants.MOH_REGISTRATION,
    loadChildren:
      './modules/moh-registration/moh-registration.module#MohRegistrationModule'
  },
  {
    path: PrimeConstants.BCSC_REGISTRATION,
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
