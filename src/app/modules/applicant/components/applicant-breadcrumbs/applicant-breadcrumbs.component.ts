import { Component, OnInit, Input } from '@angular/core';
import { ApplicantDataService } from '../../../../services/applicant-data.service';

@Component({
  selector: 'prime-applicant-breadcrumbs',
  templateUrl: './applicant-breadcrumbs.component.html',
  styleUrls: ['./applicant-breadcrumbs.component.scss']
})
export class ApplicantBreadcrumbsComponent implements OnInit {
  @Input() pageName: string;
  @Input() nextPageLink: string;
  @Input() previousPageLink: string;
  @Input() shouldDisableContinue: Boolean;

  constructor(private applicantDataService: ApplicantDataService) { }

  ngOnInit() {
  }

  get progressSteps() {
    return this.applicantDataService.getPageProgressSteps();
  }

}
