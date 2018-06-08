import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionerDashboardComponent } from './provisioner-dashboard.component';
import { EnrollmentListComponent } from '../../../verifier/components/enrollment-list/enrollment-list.component';
import { VerifierModule } from '../../../verifier/verifier.module';
import { EnrollmentRowComponent } from '../../../verifier/components/enrollment-row/enrollment-row.component';
import { EnrollmentProgressRowComponent } from '../../../../core/enrollment-progress-row/enrollment-progress-row.component';
import { PillBadgeComponent } from '../../../../core/pill-badge/pill-badge.component';
import { AddUserButtonComponent } from '../../../../core/add-user-button/add-user-button.component';
import { InfoButtonComponent } from '../../../verifier/components/user-info-button/user-info-button.component';
import { TooltipModule, ProgressbarModule } from 'ngx-bootstrap';
import { ProgressBarComponent } from '../../../../core/progress-bar/progress-bar.component';
import { MiniProgressBarComponent } from '../../../../core/mini-progress-bar/mini-progress-bar.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DatepickerComponent } from '../../../../core/datepicker/datepicker.component';
import { VerifierService } from '../../../../services/verifier.service';
import { NgxMyDatePicker, NgxMyDatePickerModule } from 'ngx-mydatepicker';


describe('ProvisionerDashboardComponent', () => {
  let component: ProvisionerDashboardComponent;
  let fixture: ComponentFixture<ProvisionerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerDashboardComponent, EnrollmentListComponent, EnrollmentRowComponent, EnrollmentProgressRowComponent, PillBadgeComponent, AddUserButtonComponent, InfoButtonComponent, MiniProgressBarComponent, DatepickerComponent],
      imports: [ TooltipModule.forRoot(),  ProgressbarModule.forRoot(), FormsModule, RouterTestingModule, NgxMyDatePickerModule.forRoot()],
      providers: [VerifierService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
