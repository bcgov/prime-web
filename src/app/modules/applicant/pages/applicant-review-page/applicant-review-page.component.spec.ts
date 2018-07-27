import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantReviewPageComponent } from './applicant-review-page.component';
import { ApplicantModule } from '../../applicant.module';
import { CoreModule } from '../../../core/core.module';
import { ApplicantBreadcrumbsComponent } from '../../components/applicant-breadcrumbs/applicant-breadcrumbs.component';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ApplicantDataService } from '../../../../services/applicant-data.service';

describe('ApplicantReviewPageComponent', () => {
  let component: ApplicantReviewPageComponent;
  let fixture: ComponentFixture<ApplicantReviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantReviewPageComponent, ApplicantBreadcrumbsComponent ],
      imports: [CoreModule, RouterTestingModule],
      providers: [PrimeDataService, ApplicantDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantReviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
