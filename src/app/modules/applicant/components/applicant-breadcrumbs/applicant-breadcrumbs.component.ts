import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ApplicantDataService } from '../../../../services/applicant-data.service';
import { fadeIn } from '../../../../animations/animations';

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

  @Input() showControls: boolean = false;
  @Output() onCancel = new EventEmitter<boolean>();
  @Output() onSave = new EventEmitter<boolean>();
  public showSaveMessage: boolean = false;

  constructor(private applicantDataService: ApplicantDataService) { }

  ngOnInit() {
  }

  ngOnChanges(change){
    // If the parent component is trying to turn the controls back on after
    // they've been closed (e.g. user has saved changes then modified those
    // saved changes), we want to reset state and remove the 'saved' message.
    if (change['showControls']){
      const controlChange = change['showControls'];

      if (controlChange['currentValue'] === true
      && controlChange['previousValue'] === false){
        this.reset();
      }

    }
  }

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

  cancel(){
    this.onCancel.emit(true);
    this.reset();
  }

  get disableNavControls(): boolean {
    if (this.showSaveMessage) return false;
    return this.showControls;
  }



}
