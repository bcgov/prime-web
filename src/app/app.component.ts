import { Component } from '@angular/core';
import { ConsentModalComponent } from './core/consent-modal/consent-modal.component'
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prime – Applicant Enrollment';
  routerSubscription: Subscription;

  constructor(private router: Router){
    //Set app-wide configuration for select2.
    (<any>$.fn.select2).defaults.set( "theme", "bootstrap" );
  }

  ngOnInit() {
    this.routerSubscription = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        document.body.scrollTop = 0;
      });
  }
}
