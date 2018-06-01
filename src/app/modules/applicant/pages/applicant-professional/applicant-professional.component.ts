import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { CollegeTypes } from '../../../../models/colleges.enum';

@Component({
  selector: 'prime-applicant-professional',
  templateUrl: './applicant-professional.component.html',
  styleUrls: ['./applicant-professional.component.scss']
})
export class ApplicantProfessionalComponent implements OnInit {
  public collegeTypesSelector = 'pleaseSelect';

  constructor(private dataService: PrimeDataService) { }

  ngOnInit() {
  }

  get applicant() {
    return this.dataService.user;
  }

  // Make enum accessible to template
  get CollegeTypes() {
    return Object.keys(CollegeTypes);
  }

  collegeNumber() {
    const selection = this.collegeTypesSelector;
    return CollegeTypes[selection] ? CollegeTypes[selection] : '';
  }
}
