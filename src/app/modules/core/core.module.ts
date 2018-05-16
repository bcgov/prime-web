import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../../core/alert/alert.component';
import { PillBadgeComponent } from '../../core/pill-badge/pill-badge.component';
import { DashboardBarComponent } from '../../core/dashboard-bar/dashboard-bar.component';
import { EnrollmentProgressRowComponent } from '../../core/enrollment-progress-row/enrollment-progress-row.component';
import { SiteAccessWidgetsComponent } from '../../core/site-access-widgets/site-access-widgets.component';
import { AlertModule, TooltipModule, ProgressbarModule } from 'ngx-bootstrap';
import { AddUserButtonComponent } from '../../core/add-user-button/add-user-button.component';
import { MiniProgressBarComponent } from '../../core/mini-progress-bar/mini-progress-bar.component';
import { MillerItemCheckboxComponent } from '../../core/miller-item-checkbox/miller-item-checkbox.component';
import { ExpandingSearchComponent } from '../../core/expanding-search/expanding-search.component';
import { EnrollmentListComponent } from '../../core/enrollment-list/enrollment-list.component';
import { EnrollmentRowComponent } from '../../core/enrollment-row/enrollment-row.component';
import { MillerColumnsComponent } from '../../core/miller-columns/miller-columns.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { DatepickerComponent } from '../../app/core/datepicker/datepicker.component';
import { RouterModule } from '@angular/router';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { PrimeDataModule } from '../prime-data/prime-data.module';
import { InfoButtonComponent } from '../../core/user-info-button/user-info-button.component';


const componentList = [
  AlertComponent,
  PillBadgeComponent,
  DashboardBarComponent,
  EnrollmentProgressRowComponent,
  SiteAccessWidgetsComponent,
  AddUserButtonComponent,
  MiniProgressBarComponent,
  MillerItemCheckboxComponent,
  ExpandingSearchComponent,
  EnrollmentListComponent,
  EnrollmentRowComponent,
  MillerColumnsComponent,
  DatepickerComponent,
]

@NgModule({
  imports: [
    CommonModule,
    AlertModule.forRoot(),
    TooltipModule.forRoot(),
    NgxChartsModule,
    FormsModule,
    ProgressbarModule.forRoot(),
    RouterModule,
    NgxMyDatePickerModule.forRoot(),
  ],
  declarations: [
    componentList,
    InfoButtonComponent
  ],
  exports: [
    componentList
  ]
})
export class CoreModule { }
