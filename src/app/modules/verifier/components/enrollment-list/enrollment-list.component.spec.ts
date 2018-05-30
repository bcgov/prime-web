import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentListComponent } from './enrollment-list.component';
import {EnrollmentRowComponent} from '../enrollment-row/enrollment-row.component';
import {PillBadgeComponent} from '../../../../core/pill-badge/pill-badge.component';
import {InfoButtonComponent} from '../user-info-button/user-info-button.component';
import {EnrollmentProgressRowComponent} from '../enrollment-progress-row/enrollment-progress-row.component';
import {TooltipModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {DatepickerComponent} from '../../../../core/datepicker/datepicker.component';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {VerifierService} from '../../../../services/verifier.service';

describe('EnrollmentListComponent', () => {
  let component: EnrollmentListComponent;
  let fixture: ComponentFixture<EnrollmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentListComponent, EnrollmentRowComponent, PillBadgeComponent, InfoButtonComponent, EnrollmentProgressRowComponent, DatepickerComponent],
      imports: [TooltipModule.forRoot(), FormsModule, NgxMyDatePickerModule.forRoot()],
      providers: [VerifierService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
