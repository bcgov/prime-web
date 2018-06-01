import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoButtonComponent } from './user-info-button.component';
import {DatepickerComponent} from '../../../../core/datepicker/datepicker.component';
import {PrimeDataModule} from '../../../prime-data/prime-data.module';
import {PillBadgeComponent} from '../../../../core/pill-badge/pill-badge.component';
import {FormsModule} from '@angular/forms';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {BsModalService, ProgressbarModule, TooltipModule} from 'ngx-bootstrap';

describe('UserInfoButtonComponent', () => {
  let component: InfoButtonComponent;
  let fixture: ComponentFixture<InfoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoButtonComponent, DatepickerComponent, PillBadgeComponent],
      imports: [PrimeDataModule.forRoot(), FormsModule, NgxMyDatePickerModule.forRoot(), ProgressbarModule.forRoot(), TooltipModule.forRoot()],
      providers: [BsModalService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
