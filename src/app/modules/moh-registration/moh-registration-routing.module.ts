import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MohContainerComponent } from './components/moh-container/moh-container.component';
import { pageRoutes } from './moh-registration-page-routing.module';

export const routes: Routes = [
  {
    path: '',
    component: MohContainerComponent,
    children: pageRoutes
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
