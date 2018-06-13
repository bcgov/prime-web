import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../../../../services/prime-data.service';
import {EnrollmentRowItem} from '../../../../verifier/components/enrollment-row/enrollment-row.component';

@Component({
  selector: 'prime-provisioner-dash-by-site',
  templateUrl: './provisioner-dash-by-site.component.html',
  styleUrls: ['./provisioner-dash-by-site.component.scss']
})
export class ProvisionerDashBySiteComponent{

  constructor(private dataService: PrimeDataService) { }

  get enrollmentBySiteData(): EnrollmentRowItem[] {
    return this.dataService.getEnrollmentBySite();
  }

}
