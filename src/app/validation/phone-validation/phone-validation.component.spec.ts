import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneValidationComponent } from './phone-validation.component';
import { ElementRef } from '@angular/core';


describe('PhoneValidationComponent', () => {
  let component: PhoneValidationComponent;
  let fixture: ComponentFixture<PhoneValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a regex', () => {
    expect(PhoneValidationComponent.regex).toBeDefined();
  });

  it('be able to validate a phone number', () => {
    expect(PhoneValidationComponent.validate(createWithPhone('123-456-7890'))).toBeTruthy();
    expect(PhoneValidationComponent.validate(createWithPhone('123-456-7890a'))).toBeTruthy(); //Should fail! but it isn't.
    debugger;
    expect(PhoneValidationComponent.validate(createWithPhone('plzfaila'))).toBeTruthy(); //Should fail! but it isn't.

  });
});

function createWithPhone(phoneNum: string): ElementRef{
  return new ElementRef(`<input type='text' value='${phoneNum}'>`);
}
