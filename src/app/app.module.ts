import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { ModalModule } from 'ngx-bootstrap/modal';
import { Select2Module } from 'ng2-select2';

import { AppComponent } from './app.component';
import { ApplicantDataService } from './services/applicant-data.service'
import { ProgressBarComponent } from './core/progress-bar/progress-bar.component';
import { ConsentModalComponent } from './core/consent-modal/consent-modal.component';
import { ProfessionalInfoComponent } from './pages/professional-info/professional-info.component';
import { BaseComponent } from './core/base-component/base-component.component';
import { PrimeDateComponent } from './core/date/date.component';
import { CalendarFieldFormatterDirective } from './core/date/calendar-field-formatter.directive';
import { CalendarYearValidator } from './core/date/calendar-year.validator';
import { CalendarDayValidator } from './core/date/calendar-day.validator';
import { CalendarMonthValidator } from './core/date/calendar-month.validator';
import { CalendarFutureDates } from './core/date/calendar-future-dates.validator';
import { ContactInformationComponent } from './pages/contact-information/contact-information.component';
import { SelfDeclarationComponent } from './pages/self-declaration/self-declaration.component';
import { UserAcceptanceComponent } from './pages/user-acceptance/user-acceptance.component';
import { ReviewSubmitComponent } from './pages/review-submit/review-submit.component';
import { SiteAccessComponent } from './pages/site-access/site-access.component'

import { AddressComponent } from './core/address/address.component';
import { FileUploaderComponent } from './core/file-uploader/file-uploader.component';

import { CaptchaComponent } from 'mygovbc-captcha-widget/src/captcha.component';

import { PrimeToggleComponent } from './core/toggle/toggle.component';
import { PrimeFormFooterComponent } from './core/form-footer/form-footer.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CollegeDataService } from './services/college-data.service';
import { StickyModule } from 'ng2-sticky-kit';
import { DummyDataService } from './services/dummy-data.service';
import { PrimeRequiredDirective } from './validation/prime-required.directive';
import { RequiredValidationErrorsComponent } from './validation/required-validation-errors/required-validation-errors.component';
import { PhoneValidationComponent } from './validation/phone-validation/phone-validation.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ConsentModalComponent,
    ProfessionalInfoComponent,
    BaseComponent,
    PrimeDateComponent,
    CalendarFieldFormatterDirective,
    CalendarYearValidator,
    CalendarDayValidator,
    CalendarMonthValidator,
    CalendarFutureDates,
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
    PrimeRequiredDirective,
    RequiredValidationErrorsComponent,
    PhoneValidationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule,
    ModalModule.forRoot(),
    Select2Module,
    Ng2SmartTableModule,
    StickyModule
  ],
  providers: [
    ApplicantDataService,
    CollegeDataService,
    DummyDataService
  ],
  entryComponents: [
    RequiredValidationErrorsComponent //Necessary because it's a dynamicly added component.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
