import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'prime-dashboard-bar',
  templateUrl: './dashboard-bar.component.html',
  styleUrls: ['./dashboard-bar.component.scss']
})
export class DashboardBarComponent implements OnInit {
  @Input() hideAddUserButton: boolean = false;
  isProvisionerDashboard: boolean = false;
  isVerifierDashboard: boolean = false;
  byUserActive: boolean = true;

  constructor(public router: Router) {
    if (this.router.url.indexOf('/provisioner/dashboard/') > -1) {
      this.isProvisionerDashboard = true;
    } else {
      this.isVerifierDashboard = true;
    }

  }

  ngOnInit() {
    this.updateByUserActive();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.updateByUserActive();
    });
  }


  updateByUserActive(){
    this.byUserActive = this.router.url.endsWith('user');
  }

}
