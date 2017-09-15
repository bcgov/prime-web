import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredValidationErrorsComponent } from './required-validation.component';

describe('RequiredErrorAlertComponent', () => {
  let component: RequiredValidationErrorsComponent;
  let fixture: ComponentFixture<RequiredValidationErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiredValidationErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredValidationErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
