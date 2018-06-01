import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantSelfDeclarationComponent } from './applicant-self-declaration.component';
import {ApplicantBreadcrumbsComponent} from '../../components/applicant-breadcrumbs/applicant-breadcrumbs.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('ApplicantSelfDeclarationComponent', () => {
  let component: ApplicantSelfDeclarationComponent;
  let fixture: ComponentFixture<ApplicantSelfDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantSelfDeclarationComponent, ApplicantBreadcrumbsComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantSelfDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
