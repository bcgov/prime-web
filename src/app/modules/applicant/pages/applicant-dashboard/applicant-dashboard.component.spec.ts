import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantDashboardComponent } from './applicant-dashboard.component';
import {AlertComponent} from '../../../../core/alert/alert.component';
import {AlertModule} from 'ngx-bootstrap';
import {PrimeDataService} from '../../../../services/prime-data.service';
import {DummyDataService} from '../../../../services/dummy-data.service';

describe('ApplicantDashboardComponent', () => {
  let component: ApplicantDashboardComponent;
  let fixture: ComponentFixture<ApplicantDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantDashboardComponent, AlertComponent ],
      imports: [AlertModule.forRoot()],
      providers: [PrimeDataService, DummyDataService]
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
