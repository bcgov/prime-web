import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MillerColumnsComponent } from './miller-columns.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {ExpandingSearchComponent} from '../../../../core/expanding-search/expanding-search.component';
import {AddUserButtonComponent} from '../../../../core/add-user-button/add-user-button.component';
import {InfoButtonComponent} from '../../../../core/user-info-button/user-info-button.component';
import {MillerItemCheckboxComponent} from '../miller-item-checkbox/miller-item-checkbox.component';
import {MiniProgressBarComponent} from '../../../../core/mini-progress-bar/mini-progress-bar.component';
import {DatepickerComponent} from '../../../../core/datepicker/datepicker.component';
import {PillBadgeComponent} from '../../../../core/pill-badge/pill-badge.component';
import {ProgressBarComponent} from '../../../../core/progress-bar/progress-bar.component';
import {ProgressbarModule, TooltipModule} from 'ngx-bootstrap';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {PrimeDataService} from '../../../../services/prime-data.service';
import { LoadingSpinnerDirective } from '../../../core/directives/loading-spinner.directive';

describe('MillerColumnsComponent', () => {
  let component: MillerColumnsComponent;
  let fixture: ComponentFixture<MillerColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MillerColumnsComponent, ExpandingSearchComponent, AddUserButtonComponent, InfoButtonComponent, MillerItemCheckboxComponent, MiniProgressBarComponent, DatepickerComponent, PillBadgeComponent, ProgressBarComponent, LoadingSpinnerDirective],
      imports: [RouterTestingModule, FormsModule, ProgressbarModule.forRoot(), NgxMyDatePickerModule.forRoot(), TooltipModule.forRoot()],
      providers: [ PrimeDataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MillerColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
