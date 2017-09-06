import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfessionalInfoComponent } from './professional-info.component';
import { CalendarYearValidator } from '../../core/date/calendar-year.validator';
import { PrimeDateComponent } from '../../core/date/prime-date.component';
import { ConsentModalComponent } from '../../core/consent-modal/consent-modal.component'
import { FormsModule } from '@angular/forms';
import { Select2Module } from 'ng2-select2';
import { CalendarFieldFormatterDirective } from '../../core/date/calendar-field-formatter.directive';
import { ModalModule } from 'ngx-bootstrap';
import { ApplicantDataService } from '../../services/applicant-data.service';
import { Colleges } from '../../models/colleges.enum'
import { PrimeToggleComponent } from '../../core/prime-toggle/prime-toggle.component';
import { PrimeFormFooterComponent } from '../../core/prime-form-footer/prime-form-footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CollegeDataService } from '../../services/college-data.service';



describe('ProfessionalInfoComponent', () => {
  let component: ProfessionalInfoComponent;
  let fixture: ComponentFixture<ProfessionalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ApplicantDataService, CollegeDataService],
      imports: [FormsModule, Select2Module, ModalModule.forRoot(), RouterTestingModule],
      declarations: [ProfessionalInfoComponent, CalendarYearValidator, PrimeDateComponent, ConsentModalComponent, CalendarFieldFormatterDirective, PrimeToggleComponent, PrimeFormFooterComponent]
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

  it('should have applicant', () => {
    expect(component.applicant).toBeTruthy();
  });

  //These tests are outdated, when there used to be a .setCollegeSelection() method. Removable. Left in for now during greenfield dev when tests and API are in flux.
  it('should be able to set college selection', () => {
    //During dev, if app is in readOnly we populate dummy data. Once business decisions are nailed down, this will change.
    if (!component.readonly){
      expect(component.applicant.college).toBeUndefined();
    }
    component.applicant.college = [Colleges.None];
    expect(component.applicant.college[0] === Colleges.None).toBeTruthy();
    component.applicant.college = [Colleges.CPBC];
    expect(component.applicant.college[0] === Colleges.CPBC).toBeTruthy();
  })
});
