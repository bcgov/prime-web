import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteSubmissionComponent } from './complete-submission.component';

describe('CompleteSubmissionComponent', () => {
  let component: CompleteSubmissionComponent;
  let fixture: ComponentFixture<CompleteSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
