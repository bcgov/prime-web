import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BcscContainerComponent } from './components/bcsc-container/bcsc-container.component';
import { bcscPages } from './bcsc-registration-page-routing.module';

const routes: Routes = [
  {
    path: '',
    component: BcscContainerComponent,
    children: bcscPages
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
