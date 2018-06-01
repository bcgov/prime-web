import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { CollegeTypes } from '../../../../models/colleges.enum';

@Component({
  selector: 'prime-applicant-professional',
  templateUrl: './applicant-professional.component.html',
  styleUrls: ['./applicant-professional.component.scss']
})
export class ApplicantProfessionalComponent implements OnInit {
  public collegeTypesSelector: CollegeTypes;

  constructor(private dataService: PrimeDataService) { }

  ngOnInit() {
    this.collegeTypesSelector = CollegeTypes.CPBC;
  }

  get applicant() {
    return this.dataService.user;
  }

  // Make enum accessible to template
  get CollegeTypes() {
    return Object.keys(CollegeTypes);
  }

  // collegeTypes() {
  //   let selection: CollegeTypes = this.collegeTypesSelector;
  // }
}
