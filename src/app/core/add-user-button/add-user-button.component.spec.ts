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
import {PostalCodeComponent} from "../../modules/core/components/postal-code/postal-code.component";
import {PhoneNumberComponent} from "../../modules/core/components/phone-number/phone-number.component";
import {TextMaskModule} from "angular2-text-mask";

describe('AddUserButtonComponent', () => {
  let component: AddUserButtonComponent;
  let fixture: ComponentFixture<AddUserButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserButtonComponent, MiniProgressBarComponent, DatepickerComponent, PostalCodeComponent, PhoneNumberComponent],
      imports: [PrimeDataModule.forRoot(), FormsModule, ProgressbarModule.forRoot(), NgxMyDatePickerModule.forRoot(), TextMaskModule],
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
