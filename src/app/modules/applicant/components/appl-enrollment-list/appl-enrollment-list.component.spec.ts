import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplEnrollmentListComponent } from './appl-enrollment-list.component';
import { CoreModule } from '../../../core/core.module';
import { ApplEnrollmentRowComponent } from '../appl-enrollment-row/appl-enrollment-row.component';
import { ApplicantDataService } from '../../../../services/applicant-data.service';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InfoButtonComponent } from '../../../../core/user-info-button/user-info-button.component';
import { AlertModule } from 'ngx-bootstrap';
import { AppEnrollmentProgressRowComponent } from '../app-enrollment-progress-row/app-enrollment-progress-row.component';
import { FormsModule } from '@angular/forms';

describe('ApplEnrollmentListComponent', () => {
  let component: ApplEnrollmentListComponent;
  let fixture: ComponentFixture<ApplEnrollmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplEnrollmentListComponent, ApplEnrollmentRowComponent, AppEnrollmentProgressRowComponent ],
      imports: [ CoreModule, NoopAnimationsModule, AlertModule.forRoot(), FormsModule ],
      providers: [ApplicantDataService, PrimeDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplEnrollmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
