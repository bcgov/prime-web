import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'prime-dashboard-bar',
  templateUrl: './dashboard-bar.component.html',
  styleUrls: ['./dashboard-bar.component.scss']
})
export class DashboardBarComponent implements OnInit {
  @Input() hideAddUserButton: boolean = false;
  isProvisionerDashboard: boolean = false;
  isVerifierDashboard: boolean = false;

  constructor(public router: Router) {
    if (this.router.url.indexOf('/provisioner/dashboard/') > -1) {
      this.isProvisionerDashboard = true;
    } else {
      this.isVerifierDashboard = true;
    }
  }

  ngOnInit() {
  }

}
