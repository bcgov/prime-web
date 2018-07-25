import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantReviewPageComponent } from './applicant-review-page.component';

describe('ApplicantReviewPageComponent', () => {
  let component: ApplicantReviewPageComponent;
  let fixture: ComponentFixture<ApplicantReviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantReviewPageComponent ]
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
