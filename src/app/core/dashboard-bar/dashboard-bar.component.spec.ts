import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBarComponent } from './dashboard-bar.component';
import {AddUserButtonComponent} from '../add-user-button/add-user-button.component';
import {MiniProgressBarComponent} from '../mini-progress-bar/mini-progress-bar.component';
import {FormsModule} from '@angular/forms';
import {DatepickerComponent} from '../datepicker/datepicker.component';
import {BsModalService, ComponentLoaderFactory, PositioningService, ProgressbarModule} from 'ngx-bootstrap';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {PrimeDataService} from '../../services/prime-data.service';
import {DummyDataService} from '../../services/dummy-data.service';

describe('DashboardBarComponent', () => {
  let component: DashboardBarComponent;
  let fixture: ComponentFixture<DashboardBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBarComponent, AddUserButtonComponent, MiniProgressBarComponent, DatepickerComponent],
      imports: [FormsModule, ProgressbarModule.forRoot(), NgxMyDatePickerModule.forRoot()],
      providers: [ComponentLoaderFactory, BsModalService, PositioningService, PrimeDataService, DummyDataService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
