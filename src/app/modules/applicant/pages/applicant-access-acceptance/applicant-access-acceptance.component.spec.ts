import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantAccessAcceptanceComponent } from './applicant-access-acceptance.component';
import {ApplicantBreadcrumbsComponent} from '../../components/applicant-breadcrumbs/applicant-breadcrumbs.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {PrimeDataService} from '../../../../services/prime-data.service';


describe('ApplicantAccessAcceptanceComponent', () => {
  let component: ApplicantAccessAcceptanceComponent;
  let fixture: ComponentFixture<ApplicantAccessAcceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantAccessAcceptanceComponent, ApplicantBreadcrumbsComponent],
      imports: [RouterTestingModule, FormsModule],
      providers: [PrimeDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantAccessAcceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
