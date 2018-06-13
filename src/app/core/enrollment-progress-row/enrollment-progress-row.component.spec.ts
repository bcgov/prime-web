import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentProgressRowComponent } from './enrollment-progress-row.component';
import {BsModalService, ProgressbarModule} from 'ngx-bootstrap';
import {ProgressBarComponent} from '../progress-bar/progress-bar.component';

describe('EnrollmentProgressRowComponent', () => {
  let component: EnrollmentProgressRowComponent;
  let fixture: ComponentFixture<EnrollmentProgressRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentProgressRowComponent, ProgressBarComponent],
      imports: [ProgressbarModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentProgressRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
