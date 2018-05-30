import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserButtonComponent } from './add-user-button.component';
import {MiniProgressBarComponent} from '../mini-progress-bar/mini-progress-bar.component';
import {DatepickerComponent} from '../datepicker/datepicker.component';
import {PrimeDataModule} from '../../modules/prime-data/prime-data.module';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {FormsModule} from '@angular/forms';
import {BsModalService, ComponentLoaderFactory, PositioningService, ProgressbarModule} from 'ngx-bootstrap';
import {DummyDataService} from '../../services/dummy-data.service';
import {PrimeDataService} from '../../services/prime-data.service';

describe('AddUserButtonComponent', () => {
  let component: AddUserButtonComponent;
  let fixture: ComponentFixture<AddUserButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserButtonComponent, MiniProgressBarComponent, DatepickerComponent],
      imports: [PrimeDataModule.forRoot(), FormsModule, ProgressbarModule.forRoot(), NgxMyDatePickerModule.forRoot()],
      providers: [ComponentLoaderFactory, BsModalService, PositioningService, DummyDataService, PrimeDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
