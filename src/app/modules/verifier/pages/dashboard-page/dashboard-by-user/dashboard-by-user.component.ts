import { Component } from '@angular/core';
import { PrimeDataService } from '../../../../../services/prime-data.service';
import {EnrollmentRowItem} from '../../../components/enrollment-row/enrollment-row.component';


@Component({
  selector: 'prime-dashboard-by-user',
  templateUrl: './dashboard-by-user.component.html',
  styleUrls: ['./dashboard-by-user.component.scss']
})
export class DashboardByUserComponent {
  constructor(private dataService: PrimeDataService) { }

  get enrollmentByUserData(): EnrollmentRowItem[] {
    return this.dataService.getEnrollmentByUser();
  }

}
