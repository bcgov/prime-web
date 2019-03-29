import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './shared/components/home-page/home-page.component';
import { SearchOrganizationModalComponent } from './modules/enrollment/components/search-organization-modal/search-organization-modal.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: { title: 'Home' }
  },
  {
    path: 'test',
    component: SearchOrganizationModalComponent
  },
  {
    path: 'enrollment',
    loadChildren: './modules/enrollment/enrollment.module#EnrollmentModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
