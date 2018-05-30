import { TestBed, async } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './core/progress-bar/progress-bar.component';
import { ApplicantDataService } from './services/applicant-data.service';
import { DummyDataService } from './services/dummy-data.service';
import {UserService} from './services/user.service';
import {PrimeDataService} from './services/prime-data.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProgressBarComponent
      ],
      providers: [
        ApplicantDataService,
        DummyDataService,
        UserService,
        PrimeDataService
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a span tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span.title').textContent).toContain('PRIME — Applicant Enrollment');
  }));
});
