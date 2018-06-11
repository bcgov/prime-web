import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBySiteComponent } from './dashboard-by-site.component';
import {EnrollmentListComponent} from '../../../components/enrollment-list/enrollment-list.component';
import {EnrollmentRowComponent} from '../../../components/enrollment-row/enrollment-row.component';
import {PillBadgeComponent} from '../../../../../core/pill-badge/pill-badge.component';
import {InfoButtonComponent} from '../../../components/user-info-button/user-info-button.component';
import {EnrollmentProgressRowComponent} from '../../../../../core/enrollment-progress-row/enrollment-progress-row.component';
import {TooltipModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {DatepickerComponent} from '../../../../../core/datepicker/datepicker.component';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {PrimeDataService} from '../../../../../services/prime-data.service';
import {VerifierService} from '../../../../../services/verifier.service';

describe('DashboardBySiteComponent', () => {
  let component: DashboardBySiteComponent;
  let fixture: ComponentFixture<DashboardBySiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBySiteComponent, EnrollmentListComponent, EnrollmentRowComponent, PillBadgeComponent, InfoButtonComponent, EnrollmentProgressRowComponent, DatepickerComponent ],
      imports: [TooltipModule.forRoot(), FormsModule, NgxMyDatePickerModule.forRoot()],
      providers: [PrimeDataService, VerifierService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBySiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
