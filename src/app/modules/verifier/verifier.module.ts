import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeDataService } from '../../services/prime-data.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { VerifierRoutingModule } from './verifier-routing.modules';
import { DashboardPageComponent } from '../../pages/dashboard-page/dashboard-page.component';
import { DashboardByUserComponent } from '../../pages/dashboard-page/dashboard-by-user/dashboard-by-user.component';
import { DashboardBySiteComponent } from '../../pages/dashboard-page/dashboard-by-site/dashboard-by-site.component';
import { UserEnrollmentComponent } from '../../pages/user-enrollment/user-enrollment.component';
import { SiteEnrollmentComponent } from '../../pages/site-enrollment/site-enrollment.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    VerifierRoutingModule,
    NgxChartsModule,
    CoreModule,
  ],
  providers: [],
  declarations: [
    DashboardPageComponent,
    DashboardByUserComponent,
    DashboardBySiteComponent,
    UserEnrollmentComponent,
    SiteEnrollmentComponent,
  ]
})
export class VerifierModule { }
