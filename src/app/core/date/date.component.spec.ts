import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CalendarFieldFormatterDirective } from '../../core/date/calendar-field-formatter.directive';
import { CalendarFutureDates } from '../date/calendar-future-dates.validator';
import * as moment from 'moment';
import { PrimeDateComponent } from './date.component'

describe('PrimeDateComponent', () => {
  let component: PrimeDateComponent;
  let fixture: ComponentFixture<PrimeDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [PrimeDateComponent, CalendarFieldFormatterDirective, CalendarFutureDates],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeDateComponent);
    component = fixture.componentInstance;
    component.date = {day: null, month: null, year: null}
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

   it('should be required by default', () => {
    expect(component.required).toBe(true);
  });

  it('should detect incomplete dates', () => {
    expect(component.isValid()).toBe(false);
    component.setDayValueOnModel('1');
    component.setMonthValueOnModel('1');
    expect(component.isValid()).toBe(false);
  });

  it('should pass validation when completely empty if not required', () =>{
    component.required = false;
    expect(component.isValid()).toBe(true);
    component.setDayValueOnModel('1');
    expect(component.isValid()).toBe(false);
  })

  it('should be valid when setting current date', () =>{
    component.setToToday();
    expect(component.isValid()).toBe(true);
    expect(component.date.month).toEqual(moment().month() + 1)
    expect(component.date.year).toEqual(moment().year())
    expect(component.date.day).toEqual(moment().date())
  })

  it('should be able to require dates to be set in the future.', () =>{
    component.restrictDate = "future"
    component.setToToday();
    component.setYearValueOnModel(component.date.year + 1 + '')
    expect(component.isValid()).toBe(true);
    component.setYearValueOnModel(component.date.year - 10 + '')
    expect(component.isValid()).toBe(false);
  })

  it('should be able to require dates to be set in the past.', () =>{
    component.restrictDate = "past"
    component.setToToday();
    component.setYearValueOnModel(component.date.year + 1 + '')
    expect(component.isValid()).toBe(false);
    component.setYearValueOnModel(component.date.year - 10 + '')
    expect(component.isValid()).toBe(true);
  })

  it('should validate today as if it\'s a future date', () =>{
    component.restrictDate = "future"
    component.setToToday();
    expect(component.isValid()).toBe(true);
    component.restrictDate = "past"
    expect(component.isValid()).toBe(false);
  })

});
