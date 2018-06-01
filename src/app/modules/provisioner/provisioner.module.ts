import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvisionerDashboardComponent } from './pages/provisioner-dashboard/provisioner-dashboard.component';
import { CoreModule } from '../core/core.module';
import { ProvisionerRoutingModule } from './provisioner-routing.modules';
import { VerifierModule } from '../verifier/verifier.module';
import { ProvisionerWidgetsComponent } from './components/provisioner-widgets/provisioner-widgets.component';
import { TooltipModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ProvisionerRoutingModule,
    VerifierModule,
    TooltipModule.forRoot()
  ],
  declarations: [
    ProvisionerDashboardComponent,
    ProvisionerWidgetsComponent
  ]
})
export class ProvisionerModule { }
