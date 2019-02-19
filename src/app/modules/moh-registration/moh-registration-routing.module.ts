import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MohContainerComponent } from './components/moh-container/moh-container.component';
import { mohPages } from './moh-registration-page-routing.module';

export const routes: Routes = [
  {
    path: '',
    component: MohContainerComponent,
    children: mohPages
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
