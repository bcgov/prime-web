import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantBreadcrumbsComponent } from './applicant-breadcrumbs.component';
import {RouterTestingModule} from '@angular/router/testing';
import { CoreModule } from '../../../core/core.module';
import { AlertModule } from 'ngx-bootstrap';
import { APP_BASE_HREF } from '@angular/common';
import { ApplicantDataService } from '../../../../services/applicant-data.service';
import { PrimeDataService } from '../../../../services/prime-data.service';

describe('ApplicantBreadcrumbsComponent', () => {
  let component: ApplicantBreadcrumbsComponent;
  let fixture: ComponentFixture<ApplicantBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantBreadcrumbsComponent ],
      imports: [RouterTestingModule, CoreModule, AlertModule.forRoot()],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}, ApplicantDataService, PrimeDataService]
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
