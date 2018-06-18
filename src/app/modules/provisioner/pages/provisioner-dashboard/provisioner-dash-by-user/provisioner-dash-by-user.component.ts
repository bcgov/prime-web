import { Component } from '@angular/core';
import {EnrollmentRowItem} from "../../../../verifier/components/enrollment-row/enrollment-row.component";
import {PrimeDataService} from "../../../../../services/prime-data.service";

@Component({
  selector: 'prime-provisioner-dash-by-user',
  templateUrl: './provisioner-dash-by-user.component.html',
  styleUrls: ['./provisioner-dash-by-user.component.scss']
})
export class ProvisionerDashByUserComponent{

  constructor(private dataService: PrimeDataService) { }

  get enrollmentByUserData(): EnrollmentRowItem[] {
    return this.dataService.getEnrollmentByUser();
  }

}
