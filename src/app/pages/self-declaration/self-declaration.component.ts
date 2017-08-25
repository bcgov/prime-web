import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantDataService } from '../../services/applicant-data.service';
import { Applicant } from '../../models/applicant';

@Component({
  selector: 'app-self-declaration',
  templateUrl: './self-declaration.component.html',
  styleUrls: ['./self-declaration.component.scss']
})
export class SelfDeclarationComponent implements OnInit {
  public applicant: Applicant;

  constructor(private router: Router,
  private applicantData: ApplicantDataService) {
    this.applicant = applicantData.applicant;
   }

  ngOnInit() {
  }

  setHadLimits(val: boolean) {
    this.applicant.hasHadLimitsOrConditions = val;
  }

  setHasBeenSuspended(val: boolean) {
    this.applicant.hasBeenSuspended = val;
  }

  setHasPharmaNetEverRevoked(val: boolean){
    this.applicant.hasPharmaNetEverRevoked = val;
  }

  setHasRevocationBeenResolved(val: boolean){
    this.applicant.hasRevocationBeenResolved = val;
  }

  setInfoContravention(val : boolean){
    this.applicant.hasInformationContraventionOrder = val;
  }

  canContinue(): boolean {
    return true;
  }

  continue(): void {
    console.log('---------------\ncontinue');
    this.router.navigate(['user-acceptance']);
  }

}
