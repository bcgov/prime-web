import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProvisionerDashboardComponent } from './pages/provisioner-dashboard/provisioner-dashboard.component';
import { CoreModule } from '../core/core.module';
import { ProvisionerRoutingModule } from './provisioner-routing.modules';
import { VerifierModule } from '../verifier/verifier.module';
import { ProvisionerWidgetsComponent } from './components/provisioner-widgets/provisioner-widgets.component';
import { TooltipModule } from 'ngx-bootstrap';
import { ProvisionerDetailsComponent } from './pages/provisioner-details/provisioner-details.component';
import { FormsModule } from '@angular/forms';
import { ProvisionerRowComponent } from './components/provisioner-row/provisioner-row.component';
import { ProvisionerListComponent } from './components/provisioner-list/provisioner-list.component';
import { ProvisionerDashBySiteComponent } from './pages/provisioner-dashboard/provisioner-dash-by-site/provisioner-dash-by-site.component';
import { ProvisionerDashBarComponent } from './components/provisioner-dash-bar/provisioner-dash-bar.component';
import { ProvisionerDashByUserComponent } from './pages/provisioner-dashboard/provisioner-dash-by-user/provisioner-dash-by-user.component';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ProvisionerRoutingModule,
    NgxChartsModule,
    VerifierModule,
    TooltipModule.forRoot(),
    FormsModule

  ],
  providers: [],
  declarations: [
    ProvisionerDashboardComponent,
    ProvisionerWidgetsComponent,
    ProvisionerDetailsComponent,
    ProvisionerRowComponent,
    ProvisionerListComponent,
    ProvisionerDashBySiteComponent,
    ProvisionerDashBarComponent,
    ProvisionerDashByUserComponent
  ]
})

export class ProvisionerModule { }
