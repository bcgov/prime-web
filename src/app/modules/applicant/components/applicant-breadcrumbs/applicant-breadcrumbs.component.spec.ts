import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantBreadcrumbsComponent } from './applicant-breadcrumbs.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('ApplicantBreadcrumbsComponent', () => {
  let component: ApplicantBreadcrumbsComponent;
  let fixture: ComponentFixture<ApplicantBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantBreadcrumbsComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
