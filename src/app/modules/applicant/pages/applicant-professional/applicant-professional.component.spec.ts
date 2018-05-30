import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantProfessionalComponent } from './applicant-professional.component';
import {ApplicantBreadcrumbsComponent} from '../../components/applicant-breadcrumbs/applicant-breadcrumbs.component';
import {PrimeToggleComponent} from '../../../../core/toggle/toggle.component';
import {DatepickerComponent} from '../../../../core/datepicker/datepicker.component';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {FormsModule} from '@angular/forms';
import {PrimeDataModule} from '../../../prime-data/prime-data.module';
import {PrimeDataService} from '../../../../services/prime-data.service';

describe('ApplicantProfessionalComponent', () => {
  let component: ApplicantProfessionalComponent;
  let fixture: ComponentFixture<ApplicantProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantProfessionalComponent, ApplicantBreadcrumbsComponent, PrimeToggleComponent, DatepickerComponent],
      imports: [RouterTestingModule, NgxMyDatePickerModule.forRoot(), FormsModule, PrimeDataModule.forRoot()],
      providers: [PrimeDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
