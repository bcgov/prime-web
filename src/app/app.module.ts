import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { StickyModule } from 'ng2-sticky-kit';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsentModalComponent } from './core/consent-modal/consent-modal.component';
import { CalendarDayValidatorDirective } from './core/date/calendar-day.validator';
import { CalendarFieldFormatterDirective } from './core/date/calendar-field-formatter.directive';
import { CalendarFutureDatesDirective } from './core/date/calendar-future-dates.validator';
import { CalendarMonthValidatorDirective } from './core/date/calendar-month.validator';
import { CalendarYearValidatorDirective } from './core/date/calendar-year.validator';
import { PrimeDateComponent } from './core/date/date.component';
import { FileUploaderComponent } from './core/file-uploader/file-uploader.component';
import { PrimeFormFooterComponent } from './core/form-footer/form-footer.component';
import { ProgressBarComponent } from './core/progress-bar/progress-bar.component';
import { CoreModule } from './modules/core/core.module';
import { PrimeDataModule } from './modules/prime-data/prime-data.module';
import { BlankPageComponent } from './pages/blank-page/blank-page.component';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ApplicantDataService } from './services/applicant-data.service';
import { DummyDataService } from './services/dummy-data.service';
import { PrimeDataService } from './services/prime-data.service';
import { UserService } from './services/user.service';
import { VerifierService } from './services/verifier.service';
import { EmailValidationComponent } from './validation/email-validation/email-validation.component';
import { PhoneValidationComponent } from './validation/phone-validation/phone-validation.component';
import { PrimeRequiredDirective } from './validation/prime-required.directive';
import { RequiredValidationErrorsComponent } from './validation/required-validation/required-validation.component';
import {TooltipModule} from 'ngx-bootstrap';
import { HeaderFooterModule } from './modules/header-footer/header-footer.module';
import { ProvisionerService } from './services/provisioner.service';



@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ConsentModalComponent,
    PrimeDateComponent,
    CalendarFieldFormatterDirective,
    CalendarYearValidatorDirective,
    CalendarDayValidatorDirective,
    CalendarMonthValidatorDirective,
    CalendarFutureDatesDirective,
    // FileUploaderComponent,
    // CaptchaComponent,
    // PrimeToggleComponent, //Moving to CoreModule
    PrimeFormFooterComponent,
    PrimeRequiredDirective,
    RequiredValidationErrorsComponent,
    PhoneValidationComponent,
    EmailValidationComponent,
    DemoPageComponent,
    HomePageComponent,
    BlankPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    PrimeDataModule.forRoot(),
    CoreModule,
    ModalModule.forRoot(),
    StickyModule,
    NgxMyDatePickerModule.forRoot(),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    MyDateRangePickerModule,
    ButtonsModule.forRoot(),
    HeaderFooterModule,
  ],
  providers: [
    ApplicantDataService,
    UserService,
    VerifierService,
    DummyDataService,
    PrimeDataService,
    ProvisionerService
  ],
  entryComponents: [
    RequiredValidationErrorsComponent,
    PhoneValidationComponent,
    EmailValidationComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
