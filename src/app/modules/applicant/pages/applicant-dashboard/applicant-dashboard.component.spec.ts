import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantDashboardComponent } from './applicant-dashboard.component';
import {AlertComponent} from '../../../../core/alert/alert.component';
import {AlertModule} from 'ngx-bootstrap';
import {PrimeDataService} from '../../../../services/prime-data.service';
import {DummyDataService} from '../../../../services/dummy-data.service';
import { ApplEnrollmentListComponent } from '../../components/appl-enrollment-list/appl-enrollment-list.component';
import { ApplEnrollmentRowComponent } from '../../components/appl-enrollment-row/appl-enrollment-row.component';
import { ExpandingSearchComponent } from '../../../../core/expanding-search/expanding-search.component';
import { FormsModule } from '@angular/forms';
import { ApplicantDataService } from '../../../../services/applicant-data.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '../../../core/core.module';

describe('ApplicantDashboardComponent', () => {
  let component: ApplicantDashboardComponent;
  let fixture: ComponentFixture<ApplicantDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantDashboardComponent, ApplEnrollmentListComponent, ApplEnrollmentRowComponent ],
      imports: [AlertModule.forRoot(), FormsModule, NoopAnimationsModule, CoreModule],
      providers: [PrimeDataService, DummyDataService, ApplicantDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
