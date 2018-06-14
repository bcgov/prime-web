import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEnrollmentProgressRowComponent } from './app-enrollment-progress-row.component';

describe('AppEnrollmentProgressRowComponent', () => {
  let component: AppEnrollmentProgressRowComponent;
  let fixture: ComponentFixture<AppEnrollmentProgressRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEnrollmentProgressRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEnrollmentProgressRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
