import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReviewSubmitComponent } from './review-submit.component';
import { CaptchaComponent } from 'mygovbc-captcha-widget/src/captcha.component';
import { PrimeFormFooterComponent } from '../../core/prime-form-footer/prime-form-footer.component'
// import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ApplicantDataService } from '../../services/applicant-data.service';
import { CollegeDataService } from '../../services/college-data.service';

import {Http, Headers, RequestOptions, ConnectionBackend, HttpModule} from "@angular/http"


describe('ReviewSubmitComponent', () => {
  let component: ReviewSubmitComponent;
  let fixture: ComponentFixture<ReviewSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpModule],
      declarations: [ReviewSubmitComponent, CaptchaComponent, PrimeFormFooterComponent],
      providers: [ApplicantDataService, CollegeDataService]
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
