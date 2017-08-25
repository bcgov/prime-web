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
import { ProgressBarComponent } from './core/progress-bar/progress-bar.component';
import { ConsentModalComponent } from './core/consent-modal/consent-modal.component';
import { ProfessionalInfoComponent } from './pages/professional-info/professional-info.component';
import { BaseComponent } from './core/base-component/base-component.component';
import { DateComponent } from './core/date/date.component';
import { CalendarFieldFormatterDirective } from './core/date/calendar-field-formatter.directive';
import { CalendarYearValidator } from './core/date/calendar-year.validator';
import { ContactInformationComponent } from './pages/contact-information/contact-information.component';
import { SelfDeclarationComponent } from './pages/self-declaration/self-declaration.component';
import { UserAcceptanceComponent } from './pages/user-acceptance/user-acceptance.component';
import { ReviewSubmitComponent } from './pages/review-submit/review-submit.component';
import { SiteAccessComponent } from './pages/site-access/site-access.component'

import { AddressComponent } from './core/address/address.component';
import { FileUploaderComponent } from './core/file-uploader/file-uploader.component';

import { CaptchaComponent } from 'mygovbc-captcha-widget/src/captcha.component';

import { PrimeToggleComponent } from './core/prime-toggle/prime-toggle.component';
import { PrimeFormFooterComponent } from './core/prime-form-footer/prime-form-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SearchBoxDirective,
    DashboardComponent,
    ProgressBarComponent,
    ConsentModalComponent,
    ProfessionalInfoComponent,
    BaseComponent,
    DateComponent,
    CalendarFieldFormatterDirective,
    CalendarYearValidator,
    ContactInformationComponent,
    SelfDeclarationComponent,
    UserAcceptanceComponent,
    ReviewSubmitComponent,
    SiteAccessComponent,
    AddressComponent,
    FileUploaderComponent,
    CaptchaComponent,
    PrimeToggleComponent,
    PrimeFormFooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule,
    ModalModule.forRoot(),
    Select2Module,
  ],
  // entryComponents: [ConsentModalContent],
  providers: [ApplicantDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
