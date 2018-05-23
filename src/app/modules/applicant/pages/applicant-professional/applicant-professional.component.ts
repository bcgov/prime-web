import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';

@Component({
  selector: 'prime-applicant-professional',
  templateUrl: './applicant-professional.component.html',
  styleUrls: ['./applicant-professional.component.scss']
})
export class ApplicantProfessionalComponent implements OnInit {

  constructor(private dataService: PrimeDataService) { }

  ngOnInit() {
  }

  get applicant() {
    return this.dataService.user;
  }

}
