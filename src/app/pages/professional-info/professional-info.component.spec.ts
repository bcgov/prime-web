import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalInfoComponent } from './professional-info.component';

import { CalendarYearValidator } from '../../core/date/calendar-year.validator';
import { DateComponent } from '../../core/date/date.component';
import { ConsentModalComponent } from '../../core/consent-modal/consent-modal.component'
import { FormsModule } from '@angular/forms';
import { Select2Module } from 'ng2-select2';
import { CalendarFieldFormatterDirective } from '../../core/date/calendar-field-formatter.directive';
import { ModalModule } from 'ngx-bootstrap';

import { ApplicantDataService } from '../../services/applicant-data.service';
import { Colleges } from '../../models/colleges.enum'


describe('ProfessionalInfoComponent', () => {
  let component: ProfessionalInfoComponent;
  let fixture: ComponentFixture<ProfessionalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ApplicantDataService],
      imports: [FormsModule, Select2Module, ModalModule.forRoot()],
      declarations: [ProfessionalInfoComponent, CalendarYearValidator, DateComponent, ConsentModalComponent, CalendarFieldFormatterDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should return 5 items in the college list', () => {
    expect(component.collegeList.length === 5).toBeTruthy();
    expect(component.collegeList[1].text === "None").toBeTruthy();
    expect(component.collegeList[0].text === "").toBeTruthy();
  })

  it('should be able to set college selection', () => {
    // component.setDeviceProvider(false);
    // expect(component.applicant.isDeviceProvider).toBeFalsy();
    expect(component.applicant.college).toBeUndefined();
    component.setCollegeSelection(Colleges.None);
    expect(component.applicant.college === Colleges.None).toBeTruthy();
    expect(component.collegeVal === Colleges.None).toBeTruthy();

    component.setCollegeSelection(Colleges.CPBC);
    expect(component.applicant.college === Colleges.CPBC).toBeTruthy();
    expect(component.collegeVal === Colleges.CPBC).toBeTruthy();
  })
});
