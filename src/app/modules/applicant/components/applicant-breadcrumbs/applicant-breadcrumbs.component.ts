import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ApplicantDataService } from '../../../../services/applicant-data.service';
import { fadeIn } from '../../../../animations/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'prime-applicant-breadcrumbs',
  templateUrl: './applicant-breadcrumbs.component.html',
  styleUrls: ['./applicant-breadcrumbs.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeIn]
})
export class ApplicantBreadcrumbsComponent implements OnInit {
  @Input() pageName: string;
  @Input() nextPageLink: string;
  @Input() previousPageLink: string;
  @Input() shouldDisableContinue: boolean;
  /** If true, the button colour will be made to stand out more */
  @Input() isButtonSubmitting: boolean = false;

  @Output() onSave = new EventEmitter<boolean>();
  public showSaveMessage: boolean = false;

  constructor(private applicantDataService: ApplicantDataService, private router: Router) { }

  ngOnInit() {}


  get progressSteps() {
    return this.applicantDataService.getPageProgressSteps();
  }

  reset(){
    this.showSaveMessage = false;
  }

  save(){
    this.showSaveMessage = true;
    this.onSave.emit(true);
  }

  continue(){
    this.save();
    this.router.navigate([this.nextPageLink]);
  }

  canContinue(): boolean {
    return !this.shouldDisableContinue;
  }



}
