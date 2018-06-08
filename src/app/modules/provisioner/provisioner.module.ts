import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvisionerDashboardComponent } from './pages/provisioner-dashboard/provisioner-dashboard.component';
import { CoreModule } from '../core/core.module';
import { ProvisionerRoutingModule } from './provisioner-routing.modules';
import { VerifierModule } from '../verifier/verifier.module';
import { ProvisionerDetailsComponent } from './pages/provisioner-details/provisioner-details.component';
import { FormsModule } from '@angular/forms';
import { ProvisionerTableComponent } from './components/provisioner-table/provisioner-table.component';
import { ProvisionerListComponent } from './components/provisioner-list/provisioner-list.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ProvisionerRoutingModule,
    VerifierModule,
    FormsModule
  ],
  declarations: [
    ProvisionerDashboardComponent,
    ProvisionerDetailsComponent,
    ProvisionerTableComponent,
    ProvisionerListComponent
  ]
})
export class ProvisionerModule { }
