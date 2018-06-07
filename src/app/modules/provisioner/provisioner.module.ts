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
import { ProvisionerTableComponent } from './components/provisioner-table/provisioner-table.component';


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
    ProvisionerTableComponent
  ]
})

export class ProvisionerModule { }
