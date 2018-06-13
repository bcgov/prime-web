import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MillerItemCheckboxComponent } from './miller-item-checkbox.component';
import {InfoButtonComponent} from '../../../../core/user-info-button/user-info-button.component';
import {DatepickerComponent} from '../../../../core/datepicker/datepicker.component';
import {FormsModule} from '@angular/forms';
import {PillBadgeComponent} from '../../../../core/pill-badge/pill-badge.component';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {TooltipModule} from 'ngx-bootstrap';

describe('MillerItemCheckboxComponent', () => {
  let component: MillerItemCheckboxComponent;
  let fixture: ComponentFixture<MillerItemCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MillerItemCheckboxComponent, InfoButtonComponent, DatepickerComponent, PillBadgeComponent],
      imports: [FormsModule, NgxMyDatePickerModule.forRoot(), TooltipModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MillerItemCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
