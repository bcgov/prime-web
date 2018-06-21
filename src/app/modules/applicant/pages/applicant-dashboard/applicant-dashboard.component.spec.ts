import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantDashboardComponent } from './applicant-dashboard.component';
import {AlertComponent} from '../../../../core/alert/alert.component';
import {AlertModule, BsModalService, ModalModule} from 'ngx-bootstrap';
import {PrimeDataService} from '../../../../services/prime-data.service';
import {DummyDataService} from '../../../../services/dummy-data.service';
import { ApplEnrollmentListComponent } from '../../components/appl-enrollment-list/appl-enrollment-list.component';
import { ApplEnrollmentRowComponent } from '../../components/appl-enrollment-row/appl-enrollment-row.component';
import { ExpandingSearchComponent } from '../../../../core/expanding-search/expanding-search.component';
import { FormsModule } from '@angular/forms';
import { ApplicantDataService } from '../../../../services/applicant-data.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '../../../core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AppEnrollmentProgressRowComponent } from '../../components/app-enrollment-progress-row/app-enrollment-progress-row.component';
import { routes } from '../../applicant-routing.modules';
import { ApplicantContactComponent } from '../applicant-contact/applicant-contact.component';
import { ApplicantAccessAcceptanceComponent } from '../applicant-access-acceptance/applicant-access-acceptance.component';
import { ApplicantProfessionalComponent } from '../applicant-professional/applicant-professional.component';
import { ApplicantBreadcrumbsComponent } from '../../components/applicant-breadcrumbs/applicant-breadcrumbs.component';

describe('ApplicantDashboardComponent', () => {
  let component: ApplicantDashboardComponent;
  let fixture: ComponentFixture<ApplicantDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantDashboardComponent, ApplEnrollmentListComponent, ApplEnrollmentRowComponent, AppEnrollmentProgressRowComponent, ApplicantContactComponent, ApplicantAccessAcceptanceComponent, ApplicantProfessionalComponent, ApplicantBreadcrumbsComponent ],
      imports: [AlertModule.forRoot(), FormsModule, NoopAnimationsModule, CoreModule, RouterTestingModule.withRoutes(routes), ModalModule.forRoot()],
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
