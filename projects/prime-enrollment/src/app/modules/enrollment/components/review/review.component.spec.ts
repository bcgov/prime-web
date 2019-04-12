import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewComponent } from './review.component';
import { SharedModule } from '@prime-enrollment/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReviewComponent', () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [ReviewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
