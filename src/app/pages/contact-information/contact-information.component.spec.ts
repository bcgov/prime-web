import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ContactInformationComponent } from './contact-information.component';
import { PrimeDateComponent } from '../../core/date/prime-date.component';
import { ApplicantDataService } from '../../services/applicant-data.service';
import { AddressComponent} from '../../core/address/address.component';
import { Select2Module } from 'ng2-select2';
import { PrimeFormFooterComponent } from '../../core/prime-form-footer/prime-form-footer.component';
import { CalendarFieldFormatterDirective } from '../../core/date/calendar-field-formatter.directive';
import { RouterTestingModule } from '@angular/router/testing';


describe('ContactInformationComponent', () => {
  let component: ContactInformationComponent;
  let fixture: ComponentFixture<ContactInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, Select2Module, RouterTestingModule],
      declarations: [ContactInformationComponent, PrimeDateComponent, AddressComponent, PrimeFormFooterComponent, CalendarFieldFormatterDirective],
      providers: [ApplicantDataService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
