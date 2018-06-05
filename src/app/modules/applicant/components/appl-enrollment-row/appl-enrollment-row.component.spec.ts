import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplEnrollmentRowComponent } from './appl-enrollment-row.component';

describe('ApplEnrollmentRowComponent', () => {
  let component: ApplEnrollmentRowComponent;
  let fixture: ComponentFixture<ApplEnrollmentRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplEnrollmentRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplEnrollmentRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
