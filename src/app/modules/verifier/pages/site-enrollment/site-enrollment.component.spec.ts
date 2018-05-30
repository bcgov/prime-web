import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEnrollmentComponent } from './site-enrollment.component';
import {MillerColumnsComponent} from '../../components/miller-columns/miller-columns.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ExpandingSearchComponent} from '../../../../core/expanding-search/expanding-search.component';
import {AddUserButtonComponent} from '../../../../core/add-user-button/add-user-button.component';
import {InfoButtonComponent} from '../../components/user-info-button/user-info-button.component';
import {MillerItemCheckboxComponent} from '../../components/miller-item-checkbox/miller-item-checkbox.component';
import {FormsModule} from '@angular/forms';
import {MiniProgressBarComponent} from '../../../../core/mini-progress-bar/mini-progress-bar.component';
import {DatepickerComponent} from '../../../../core/datepicker/datepicker.component';
import {PillBadgeComponent} from '../../../../core/pill-badge/pill-badge.component';
import {ProgressBarComponent} from '../../../../core/progress-bar/progress-bar.component';
import {ProgressbarModule, TooltipModule} from 'ngx-bootstrap';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {PrimeDataService} from '../../../../services/prime-data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('SiteEnrollmentComponent', () => {
  let component: SiteEnrollmentComponent;
  let fixture: ComponentFixture<SiteEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteEnrollmentComponent, MillerColumnsComponent, ExpandingSearchComponent , AddUserButtonComponent, InfoButtonComponent, MillerItemCheckboxComponent, MiniProgressBarComponent, DatepickerComponent, PillBadgeComponent, MiniProgressBarComponent],
      imports: [RouterTestingModule, FormsModule, ProgressbarModule.forRoot(), NgxMyDatePickerModule.forRoot(), TooltipModule.forRoot(), BrowserAnimationsModule],
      providers: [PrimeDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
