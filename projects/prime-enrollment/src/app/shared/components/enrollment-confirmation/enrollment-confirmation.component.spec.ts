import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentConfirmationComponent } from './enrollment-confirmation.component';

describe('EnrollmentConfirmationComponent', () => {
  let component: EnrollmentConfirmationComponent;
  let fixture: ComponentFixture<EnrollmentConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
