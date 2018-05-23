import { Component, OnInit } from '@angular/core';
import { EnrollmentRowItem } from '../../../components/enrollment-row/enrollment-row.interface';
import { PrimeDataService } from '../../../../../services/prime-data.service';

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
