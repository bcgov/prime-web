import { Component, OnInit } from '@angular/core';
import { DummyDataService } from './services/dummy-data.service';
import { UserService } from './services/user.service';
import { PrimeDataService } from './services/prime-data.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Logger } from './services/logger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PRIME – Applicant Enrolment';


  constructor(private userService: UserService,
    private dummyDataService: DummyDataService,
    private primeDataService: PrimeDataService,
    private router: Router,
    private logger: Logger ) {
  }

  ngOnInit() {
    // STAKEHOLDER DATA (specific scenarios)
    this.dummyDataService.populateWithDemoData(this.primeDataService);


    // log on URL change and track how long on each page
    this.logNavigation();

    // Log user activity/inactivity
    this.logSessionLength();
  }

  private logNavigation() {
    let oldUrl = this.router.url;
    const start = new Date();
    let firstRun = true;
    this.onRouteChange(url => {
      if (!firstRun){
        // log URL of the page we just left, with the time we were on that page
        const now = new Date();
        const timeOnPreviousPage = this.diffDates(start, now);
        this.logger.log({ event: 'navigation', page: url, previousPage: oldUrl, timeOnPreviousPage });
      }
      else {
        this.logger.log({ event: 'sessionStart', page: url });
      }

      oldUrl = url;
      firstRun = false;
    });
  }

  private onRouteChange(callback: (x) => void ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(route => this.router.url)
    ).subscribe(callback);
  }

  private logSessionLength(){
    const start = new Date();

    //Fires right as the page is closing.  Should work on most browsers beside Opera.
    window.onbeforeunload = () => {
      const now = new Date();
      const {hours, minutes, seconds} = this.diffDates(start, now);
      this.logger.log({event: 'sessionEnd', hours, minutes, seconds, url: this.router.url});
    };
  }

  private diffDates(past: Date, now: Date){

    let seconds = Math.floor((now.getTime() - (past.getTime())) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
    return {hours, minutes, seconds};
  }

}
