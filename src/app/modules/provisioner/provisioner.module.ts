import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvisionerDashboardComponent } from './pages/provisioner-dashboard/provisioner-dashboard.component';
import { CoreModule } from '../core/core.module';
import { ProvisionerRoutingModule } from './provisioner-routing.modules';
import { VerifierModule } from '../verifier/verifier.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ProvisionerRoutingModule,
    VerifierModule,
  ],
  declarations: [
    ProvisionerDashboardComponent
  ]
})
export class ProvisionerModule { }
