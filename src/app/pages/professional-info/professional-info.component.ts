import { Component, OnInit } from '@angular/core';
import { ApplicantDataService } from '../../services/applicant-data.service';
import { Applicant } from '../../models/applicant';

@Component({
  selector: 'prime-professional-info',
  templateUrl: './professional-info.component.html',
  styleUrls: ['./professional-info.component.scss']
})
export class ProfessionalInfoComponent implements OnInit {

  public applicant: Applicant;

  constructor(private applicantData: ApplicantDataService) {
    this.applicant = applicantData.applicant;
  }

  ngOnInit() {
  }

  setDeviceProvider(val: boolean) : void {
    this.applicant.isDeviceProvider = val;
  }

}
