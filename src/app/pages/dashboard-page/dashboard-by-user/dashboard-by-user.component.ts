import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { PrimeDataService } from '../../../services/prime-data.service';
import { EnrollmentRowItem } from '../../../core/enrollment-row/enrollment-row.interface';


@Component({
  selector: 'prime-dashboard-by-user',
  templateUrl: './dashboard-by-user.component.html',
  styleUrls: ['./dashboard-by-user.component.scss']
})
export class DashboardByUserComponent implements OnInit {
  public enrollmentByUserData: EnrollmentRowItem[];

  constructor(private dataService: PrimeDataService) { }

  ngOnInit() {
    this.enrollmentByUserData = this.dataService.getEnrollmentByUser();
  }

}
