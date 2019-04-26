import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentConfirmationComponent } from './enrollment-confirmation.component';
import { PrimeSharedModule } from '@prime-core/prime-shared/prime-shared.module';

describe('EnrollmentConfirmationComponent', () => {
  let component: EnrollmentConfirmationComponent;
  let fixture: ComponentFixture<EnrollmentConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PrimeSharedModule],
      declarations: [EnrollmentConfirmationComponent]
    }).compileComponents();
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
