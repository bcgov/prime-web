import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantContactComponent } from './applicant-contact.component';
import {ApplicantBreadcrumbsComponent} from '../../components/applicant-breadcrumbs/applicant-breadcrumbs.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {PrimeDataService} from '../../../../services/prime-data.service';
import {DummyDataService} from '../../../../services/dummy-data.service';

describe('ApplicantContactComponent', () => {
  let component: ApplicantContactComponent;
  let fixture: ComponentFixture<ApplicantContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantContactComponent, ApplicantBreadcrumbsComponent],
      imports: [RouterTestingModule, FormsModule],
      providers: [PrimeDataService, DummyDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
