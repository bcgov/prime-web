import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReviewSubmitComponent } from './review-submit.component';
import { CaptchaComponent } from 'mygovbc-captcha-widget/src/captcha.component';
import { PrimeFormFooterComponent } from '../../core/prime-form-footer/prime-form-footer.component'
import { RouterModule } from '@angular/router';

describe('ReviewSubmitComponent', () => {
  let component: ReviewSubmitComponent;
  let fixture: ComponentFixture<ReviewSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterModule],
      declarations: [ ReviewSubmitComponent, CaptchaComponent, PrimeFormFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
