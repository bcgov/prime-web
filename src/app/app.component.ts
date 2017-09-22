import { Component, OnInit } from '@angular/core';
import { ConsentModalComponent } from './core/consent-modal/consent-modal.component';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { ApplicantDataService } from './services/applicant-data.service';
import { DummyDataService } from './services/dummy-data.service';
import { Applicant } from './models/applicant.model';
import { environment } from './../environments/environment';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Prime – Applicant Enrollment';
  routerSubscription: Subscription;

  constructor(private router: Router,
    private applicantData: ApplicantDataService,
    private dummyData: DummyDataService
  ) {
    //Set app-wide configuration for select2.
    (<any>$.fn.select2).defaults.set('theme', 'bootstrap');

    if (environment.useDummyData) {
      const applicant: Applicant = applicantData.applicant;
      applicantData.applicant = dummyData.useApplicantDummyData(applicant);
    }
  }

  ngOnInit() {
    this.routerSubscription = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        document.body.scrollTop = 0;
      });
  }
}
