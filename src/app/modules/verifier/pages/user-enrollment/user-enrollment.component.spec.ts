import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEnrollmentComponent } from './user-enrollment.component';
import {MillerColumnsComponent} from '../../components/miller-columns/miller-columns.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ExpandingSearchComponent} from '../../../../core/expanding-search/expanding-search.component';
import {InfoButtonComponent} from '../../../../core/user-info-button/user-info-button.component';
import {MillerItemCheckboxComponent} from '../../components/miller-item-checkbox/miller-item-checkbox.component';
import {FormsModule} from '@angular/forms';
import {AddUserButtonComponent} from '../../../../core/add-user-button/add-user-button.component';
import {DatepickerComponent} from '../../../../core/datepicker/datepicker.component';
import {PillBadgeComponent} from '../../../../core/pill-badge/pill-badge.component';
import {MiniProgressBarComponent} from '../../../../core/mini-progress-bar/mini-progress-bar.component';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {TooltipArea} from '@swimlane/ngx-charts';
import {BsModalService, ProgressbarModule, TooltipModule} from 'ngx-bootstrap';
import {ProgressBarComponent} from '../../../../core/progress-bar/progress-bar.component';
import {PrimeDataService} from '../../../../services/prime-data.service';
import {DummyDataService} from '../../../../services/dummy-data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('UserEnrollmentComponent', () => {
  let component: UserEnrollmentComponent;
  let fixture: ComponentFixture<UserEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEnrollmentComponent, MillerColumnsComponent, ExpandingSearchComponent, InfoButtonComponent, MillerItemCheckboxComponent, AddUserButtonComponent, DatepickerComponent, PillBadgeComponent, ProgressBarComponent, MiniProgressBarComponent],
      imports: [RouterTestingModule, FormsModule, NgxMyDatePickerModule.forRoot(), TooltipModule.forRoot(), ProgressbarModule.forRoot(), BrowserAnimationsModule],
      providers: [PrimeDataService, BsModalService, DummyDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
