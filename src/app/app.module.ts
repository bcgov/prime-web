import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { Select2Module } from 'ng2-select2';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StickyModule } from 'ng2-sticky-kit';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatepickerComponent } from './app/core/datepicker/datepicker.component';
import { AddUserButtonComponent } from './core/add-user-button/add-user-button.component';
import { AddressComponent } from './core/address/address.component';
import { AlertComponent } from './core/alert/alert.component';
import { BreadcrumbComponent } from './core/breadcrumb/breadcrumb.component';
import { ConsentModalComponent } from './core/consent-modal/consent-modal.component';
import { DashboardBarComponent } from './core/dashboard-bar/dashboard-bar.component';
import { CalendarDayValidatorDirective } from './core/date/calendar-day.validator';
import { CalendarFieldFormatterDirective } from './core/date/calendar-field-formatter.directive';
import { CalendarFutureDatesDirective } from './core/date/calendar-future-dates.validator';
import { CalendarMonthValidatorDirective } from './core/date/calendar-month.validator';
import { CalendarYearValidatorDirective } from './core/date/calendar-year.validator';
import { PrimeDateComponent } from './core/date/date.component';
import { EnrollmentListComponent } from './core/enrollment-list/enrollment-list.component';
import { EnrollmentProgressRowComponent } from './core/enrollment-progress-row/enrollment-progress-row.component';
import { EnrollmentRowComponent } from './core/enrollment-row/enrollment-row.component';
import { ExpandingSearchComponent } from './core/expanding-search/expanding-search.component';
import { FileUploaderComponent } from './core/file-uploader/file-uploader.component';
import { PrimeFormFooterComponent } from './core/form-footer/form-footer.component';
import { MillerColumnsComponent } from './core/miller-columns/miller-columns.component';
import { MillerItemCheckboxComponent } from './core/miller-item-checkbox/miller-item-checkbox.component';
import { MiniProgressBarComponent } from './core/mini-progress-bar/mini-progress-bar.component';
import { PillBadgeComponent } from './core/pill-badge/pill-badge.component';
import { ProgressBarComponent } from './core/progress-bar/progress-bar.component';
import { SiteAccessWidgetsComponent } from './core/site-access-widgets/site-access-widgets.component';
import { PrimeToggleComponent } from './core/toggle/toggle.component';
import { BlankPageComponent } from './pages/blank-page/blank-page.component';
import { ContactInformationComponent } from './pages/contact-information/contact-information.component';
import { DashboardBySiteComponent } from './pages/dashboard-page/dashboard-by-site/dashboard-by-site.component';
import { DashboardByUserComponent } from './pages/dashboard-page/dashboard-by-user/dashboard-by-user.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfessionalInfoComponent } from './pages/professional-info/professional-info.component';
import { ReviewSubmitComponent } from './pages/review-submit/review-submit.component';
import { SelfDeclarationComponent } from './pages/self-declaration/self-declaration.component';
import { SiteAccessComponent } from './pages/site-access/site-access.component';
import { UserAcceptanceComponent } from './pages/user-acceptance/user-acceptance.component';
import { ApplicantDataService } from './services/applicant-data.service';
import { CollegeDataService } from './services/college-data.service';
import { DummyDataService } from './services/dummy-data.service';
import { PrimeDataService } from './services/prime-data.service';
import { UserService } from './services/user.service';
import { VerifierService } from './services/verifier.service';
import { EmailValidationComponent } from './validation/email-validation/email-validation.component';
import { PhoneValidationComponent } from './validation/phone-validation/phone-validation.component';
import { PrimeRequiredDirective } from './validation/prime-required.directive';
import { RequiredValidationErrorsComponent } from './validation/required-validation/required-validation.component';
import { UserEnrollmentComponent } from './pages/user-enrollment/user-enrollment.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ConsentModalComponent,
    ProfessionalInfoComponent,
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
    ExpandingSearchComponent,
    MillerItemCheckboxComponent,
    AddUserButtonComponent,
    MiniProgressBarComponent,
    DashboardBarComponent,
    PillBadgeComponent,
    DashboardPageComponent,
    AlertComponent,
    DashboardByUserComponent,
    DashboardBySiteComponent,
    EnrollmentProgressRowComponent,
    SiteAccessWidgetsComponent,
    UserEnrollmentComponent,
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
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    MyDateRangePickerModule,
    TooltipModule.forRoot(),
    ButtonsModule.forRoot(),
    NgxChartsModule,
  ],
  providers: [
    ApplicantDataService,
    CollegeDataService,
    UserService,
    VerifierService,
    DummyDataService,
    PrimeDataService
  ],
  entryComponents: [
    RequiredValidationErrorsComponent,
    PhoneValidationComponent,
    EmailValidationComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
