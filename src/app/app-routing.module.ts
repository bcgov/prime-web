import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankPageComponent } from './pages/blank-page/blank-page.component';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {LoginComponent} from './modules/registration/pages/login/login.component';

const routes: Routes = [
  // ----- New Routes
  {
    path: '',
    component: HomePageComponent,
    data: { breadcrumb: 'Home'}
  },
  {
    path: 'demo',
    component: DemoPageComponent,
    data: {
      breadcrumb: 'Demo'
    },
    //All these 'Example' pages are just for demo purposes and can be removed.
    //They mainly demonstrate that the BreadcrumbComponent logic is sound.
    children: [
      {
        path: 'ExampleA',
        data: { breadcrumb: 'ExampleA'},
        component: BlankPageComponent
      },
      {
        path: 'ExampleB',
        data: { breadcrumb: 'ExampleB'},
        component: BlankPageComponent,
        children: [
          {
            path: 'ExampleB-1',
            data: { breadcrumb: 'ExampleB-1'},
            component: BlankPageComponent
          },
          {
            path: 'ExampleB-2',
            data: { breadcrumb: 'ExampleB-2'},
            component: BlankPageComponent
          },
        ]
      },
      {
        path: 'ExampleC',
        data: { breadcrumb: 'ExampleC'},
        component: BlankPageComponent
      }
    ]
  },

  // Lazy loading modules below
  {
    path: 'verifier',
    loadChildren: 'app/modules/verifier/verifier.module#VerifierModule'
  },
  {
    path: 'applicant',
    loadChildren: 'app/modules/applicant/applicant.module#ApplicantModule'
  },
  {
    path: 'provisioner',
    loadChildren: 'app/modules/provisioner/provisioner.module#ProvisionerModule'
  },
  {
    path: 'register',
    loadChildren: 'app/modules/registration/registration.module#RegistrationModule'
  },
  // Login page for registration - may be oracle??
  {
    path: 'login',
    component: LoginComponent,
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
