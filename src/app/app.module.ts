import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { ModalModule } from 'ngx-bootstrap/modal';
import { Select2Module } from 'ng2-select2';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { SearchBoxDirective } from './search-box/search-box.directive';
import { ApplicantDataService } from './services/applicant-data.service'
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminModule } from 'app/admin/admin.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ProgressBarComponent } from './core/progress-bar/progress-bar.component';
import { ConsentModalComponent } from './core/consent-modal/consent-modal.component';
import { ProfessionalInfoComponent } from './pages/professional-info/professional-info.component';
import { BaseComponent } from './core/base-component/base-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SearchBoxDirective,
    DashboardComponent,
    BreadcrumbComponent,
    ProgressBarComponent,
    ConsentModalComponent,
    ProfessionalInfoComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule,
    AdminModule,
    ModalModule.forRoot(),
    Select2Module,
  ],
  // entryComponents: [ConsentModalContent],
  providers: [ApplicantDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
