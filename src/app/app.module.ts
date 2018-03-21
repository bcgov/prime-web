import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { ModalModule } from 'ngx-bootstrap/modal';
import { Select2Module } from 'ng2-select2';

import { AppComponent } from './app.component';
import { ApplicantDataService } from './services/applicant-data.service';
import { ProgressBarComponent } from './core/progress-bar/progress-bar.component';
import { ConsentModalComponent } from './core/consent-modal/consent-modal.component';
import { ProfessionalInfoComponent } from './pages/professional-info/professional-info.component';
import { BaseComponent } from './core/base-component/base-component.component';
import { PrimeDateComponent } from './core/date/date.component';
import { CalendarFieldFormatterDirective } from './core/date/calendar-field-formatter.directive';
import { CalendarYearValidatorDirective } from './core/date/calendar-year.validator';
import { CalendarDayValidatorDirective } from './core/date/calendar-day.validator';
import { CalendarMonthValidatorDirective } from './core/date/calendar-month.validator';
import { CalendarFutureDatesDirective } from './core/date/calendar-future-dates.validator';
import { ContactInformationComponent } from './pages/contact-information/contact-information.component';
import { SelfDeclarationComponent } from './pages/self-declaration/self-declaration.component';
import { UserAcceptanceComponent } from './pages/user-acceptance/user-acceptance.component';
import { ReviewSubmitComponent } from './pages/review-submit/review-submit.component';
import { SiteAccessComponent } from './pages/site-access/site-access.component';

import { AddressComponent } from './core/address/address.component';
import { FileUploaderComponent } from './core/file-uploader/file-uploader.component';

import { PrimeToggleComponent } from './core/toggle/toggle.component';
import { PrimeFormFooterComponent } from './core/form-footer/form-footer.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CollegeDataService } from './services/college-data.service';
import { StickyModule } from 'ng2-sticky-kit';
import { DummyDataService } from './services/dummy-data.service';
import { PrimeRequiredDirective } from './validation/prime-required.directive';
import { RequiredValidationErrorsComponent } from './validation/required-validation/required-validation.component';
import { PhoneValidationComponent } from './validation/phone-validation/phone-validation.component';
import { EmailValidationComponent } from './validation/email-validation/email-validation.component';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { DatepickerComponent } from './app/core/datepicker/datepicker.component';
import { BreadcrumbComponent } from './core/breadcrumb/breadcrumb.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlankPageComponent } from './pages/blank-page/blank-page.component';
import { MillerColumnsComponent } from './core/miller-columns/miller-columns.component';
import { EnrollmentListComponent } from './core/enrollment-list/enrollment-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnrollmentRowComponent } from './core/enrollment-row/enrollment-row.component';



@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ConsentModalComponent,
    ProfessionalInfoComponent,
    BaseComponent,
    PrimeDateComponent,
    CalendarFieldFormatterDirective,
    CalendarYearValidatorDirective,
    CalendarDayValidatorDirective,
    CalendarMonthValidatorDirective,
    CalendarFutureDatesDirective,
    ContactInformationComponent,
    SelfDeclarationComponent,
    UserAcceptanceComponent,
    ReviewSubmitComponent,
    SiteAccessComponent,
    AddressComponent,
    FileUploaderComponent,
    // CaptchaComponent,
    PrimeToggleComponent,
    PrimeFormFooterComponent,
    PrimeRequiredDirective,
    RequiredValidationErrorsComponent,
    PhoneValidationComponent,
    EmailValidationComponent,
    DemoPageComponent,
    DatepickerComponent,
    BreadcrumbComponent,
    HomePageComponent,
    BlankPageComponent,
    MillerColumnsComponent,
    EnrollmentListComponent,
    EnrollmentRowComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    Select2Module,
    Ng2SmartTableModule,
    StickyModule,
    NgxMyDatePickerModule.forRoot(),
    MyDateRangePickerModule
  ],
  providers: [
    ApplicantDataService,
    CollegeDataService,
    DummyDataService
  ],
  entryComponents: [
    RequiredValidationErrorsComponent,
    PhoneValidationComponent,
    EmailValidationComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
