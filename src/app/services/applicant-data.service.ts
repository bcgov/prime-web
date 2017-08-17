import { Injectable } from '@angular/core';
import { Applicant } from '../models/applicant'

@Injectable()
export class ApplicantDataService {

  public applicant: Applicant;

  constructor() {
    this.createApplicant();
  }

  createApplicant(): void {
    this.applicant = new Applicant();
  }

  // TODO - Not sure if necessary
  // saveApplicant(applicant: Applicant): void {
  //   this.applicant = applicant;
  // }

}
