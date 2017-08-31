import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantDataService } from '../../services/applicant-data.service';
import { Applicant } from '../../models/applicant';
import { BaseComponent } from '../../core/base-component/base-component.component';

@Component({
  selector: 'app-self-declaration',
  templateUrl: './self-declaration.component.html',
  styleUrls: ['./self-declaration.component.scss']
})
export class SelfDeclarationComponent extends BaseComponent implements OnInit {
  public applicant: Applicant;

  constructor(private router: Router,
  private applicantData: ApplicantDataService) {
    super();
    this.applicant = applicantData.applicant;
   }

  ngOnInit() {
  }

  canContinue(): boolean {
    return true;
  }

  continue(): void {
    console.log('---------------\ncontinue');
    this.router.navigate(['user-acceptance']);
  }

  back(): void {
    this.router.navigate(['contact-info']);
  }

}
