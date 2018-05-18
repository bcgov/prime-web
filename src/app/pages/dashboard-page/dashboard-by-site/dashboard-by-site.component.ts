import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {  PrimeDataService } from '../../../services/prime-data.service';
import { EnrollmentRowItem } from '../../../core/enrollment-row/enrollment-row.interface';

@Component({
  selector: 'prime-dashboard-by-site',
  templateUrl: './dashboard-by-site.component.html',
  styleUrls: ['./dashboard-by-site.component.scss']
})
export class DashboardBySiteComponent {
  constructor(private dataService: PrimeDataService) { }

  get enrollmentBySiteData(): EnrollmentRowItem[] {
    return this.dataService.getEnrollmentBySite();
  }

}
