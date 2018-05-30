import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPageComponent } from './dashboard-page.component';
import {AlertComponent} from '../../../../core/alert/alert.component';
import {DashboardBarComponent} from '../../../../core/dashboard-bar/dashboard-bar.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {AlertModule, BsModalService, ProgressbarModule, TooltipModule} from 'ngx-bootstrap';
import {AddUserButtonComponent} from '../../../../core/add-user-button/add-user-button.component';

import {NgxChartsModule} from '@swimlane/ngx-charts';
import {MiniProgressBarComponent} from '../../../../core/mini-progress-bar/mini-progress-bar.component';

import {PillBadgeComponent} from '../../../../core/pill-badge/pill-badge.component';
import {SiteAccessWidgetsComponent} from '../../components/site-access-widgets/site-access-widgets.component';
import {DatepickerComponent} from '../../../../core/datepicker/datepicker.component';
import {InfoButtonComponent} from '../../components/user-info-button/user-info-button.component';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {APP_BASE_HREF} from '@angular/common';
import {PrimeDataService} from '../../../../services/prime-data.service';
import {VerifierService} from '../../../../services/verifier.service';
import {DummyDataService} from '../../../../services/dummy-data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPageComponent, AlertComponent, DashboardBarComponent, AddUserButtonComponent, MiniProgressBarComponent, PillBadgeComponent, SiteAccessWidgetsComponent, DatepickerComponent, InfoButtonComponent],
      imports: [RouterTestingModule, FormsModule, AlertModule.forRoot(), TooltipModule.forRoot(), NgxChartsModule, ProgressbarModule.forRoot(), NgxMyDatePickerModule.forRoot(), BrowserAnimationsModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}, PrimeDataService, VerifierService, BsModalService, DummyDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
