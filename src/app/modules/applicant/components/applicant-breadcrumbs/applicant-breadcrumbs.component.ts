import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
