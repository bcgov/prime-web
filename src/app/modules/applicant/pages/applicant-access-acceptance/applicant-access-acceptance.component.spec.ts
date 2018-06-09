import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantAccessAcceptanceComponent } from './applicant-access-acceptance.component';
import {ApplicantBreadcrumbsComponent} from '../../components/applicant-breadcrumbs/applicant-breadcrumbs.component';
import {RouterTestingModule} from '@angular/router/testing';
<<<<<<< HEAD

import { FormsModule } from '@angular/forms';
import {PrimeDataService} from '../../../../services/prime-data.service';

=======
import {FormsModule} from '@angular/forms';
import {PrimeDataService} from '../../../../services/prime-data.service';
import { CoreModule } from '../../../core/core.module';
import { AlertModule } from 'ngx-bootstrap';
import { APP_BASE_HREF } from '@angular/common';
import { ApplicantDataService } from '../../../../services/applicant-data.service';
>>>>>>> master

describe('ApplicantAccessAcceptanceComponent', () => {
  let component: ApplicantAccessAcceptanceComponent;
  let fixture: ComponentFixture<ApplicantAccessAcceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantAccessAcceptanceComponent, ApplicantBreadcrumbsComponent],
      imports: [RouterTestingModule, FormsModule, CoreModule, AlertModule.forRoot()],
      providers: [PrimeDataService, {provide: APP_BASE_HREF, useValue: '/'}, ApplicantDataService]
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
