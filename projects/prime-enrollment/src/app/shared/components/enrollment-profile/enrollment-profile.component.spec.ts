import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentProfileComponent } from './enrollment-profile.component';

describe('EnrollmentProfileComponent', () => {
  let component: EnrollmentProfileComponent;
  let fixture: ComponentFixture<EnrollmentProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
