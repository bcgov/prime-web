import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplEnrollmentListComponent } from './appl-enrollment-list.component';
import { CoreModule } from '../../../core/core.module';
import { ApplEnrollmentRowComponent } from '../appl-enrollment-row/appl-enrollment-row.component';
import { ApplicantDataService } from '../../../../services/applicant-data.service';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InfoButtonComponent } from '../../../../core/user-info-button/user-info-button.component';

describe('ApplEnrollmentListComponent', () => {
  let component: ApplEnrollmentListComponent;
  let fixture: ComponentFixture<ApplEnrollmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplEnrollmentListComponent, ApplEnrollmentRowComponent ],
      imports: [ CoreModule, NoopAnimationsModule ],
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
