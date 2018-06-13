import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentRowComponent } from './enrollment-row.component';
import {PillBadgeComponent} from '../../../../core/pill-badge/pill-badge.component';
import {InfoButtonComponent} from '../../../../core/user-info-button/user-info-button.component';
import {EnrollmentProgressRowComponent} from '../../../../core/enrollment-progress-row/enrollment-progress-row.component';
import {BsModalService, TooltipModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {DatepickerComponent} from '../../../../core/datepicker/datepicker.component';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {RouterTestingModule} from '@angular/router/testing';
import {PrimeDataService} from '../../../../services/prime-data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('EnrollmentRowClass', () => {
  let component: EnrollmentRowComponent;
  let fixture: ComponentFixture<EnrollmentRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentRowComponent, PillBadgeComponent, InfoButtonComponent, EnrollmentProgressRowComponent, DatepickerComponent],
      imports:[TooltipModule.forRoot(), FormsModule, NgxMyDatePickerModule.forRoot(), RouterTestingModule, BrowserAnimationsModule],
      providers: [PrimeDataService, BsModalService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
