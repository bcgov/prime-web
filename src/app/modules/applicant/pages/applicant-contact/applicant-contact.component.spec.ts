import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantContactComponent } from './applicant-contact.component';
import {ApplicantBreadcrumbsComponent} from '../../components/applicant-breadcrumbs/applicant-breadcrumbs.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {PrimeDataService} from '../../../../services/prime-data.service';
import {DummyDataService} from '../../../../services/dummy-data.service';
import { CoreModule } from '../../../core/core.module';
import { APP_BASE_HREF } from '@angular/common';
import { Address } from '../../../../models/addresses.model';

describe('ApplicantContactComponent', () => {
  let component: ApplicantContactComponent;
  let fixture: ComponentFixture<ApplicantContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantContactComponent, ApplicantBreadcrumbsComponent],
      imports: [RouterTestingModule, FormsModule, CoreModule],
      providers: [PrimeDataService, DummyDataService, {provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantContactComponent);
    component = fixture.componentInstance;
    // Had to set address or tests would fail with .street undefined
    // In future, maybe move Applicant to already have initialized address in constructor?
    component.applicant.address = new Address();;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
