import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplEnrollmentListComponent } from './appl-enrollment-list.component';

describe('ApplEnrollmentListComponent', () => {
  let component: ApplEnrollmentListComponent;
  let fixture: ComponentFixture<ApplEnrollmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplEnrollmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplEnrollmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
