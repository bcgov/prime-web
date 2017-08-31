import { Component, OnInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantDataService } from '../../services/applicant-data.service';
import { Applicant } from '../../models/applicant';
import { BaseComponent } from '../../core/base-component/base-component.component';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-self-declaration',
  templateUrl: './self-declaration.component.html',
  styleUrls: ['./self-declaration.component.scss']
})
export class SelfDeclarationComponent extends BaseComponent implements OnInit {
  public applicant: Applicant;
  public viewHeight: number;
  @ViewChild('declarationQuestions') declarationQuestions: ElementRef;


  constructor(private router: Router,
    private changeRef: ChangeDetectorRef,
    private applicantData: ApplicantDataService) {
    super();
    this.applicant = applicantData.applicant;
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    //TODO - Refactor to get height directly from .upload-section.
    //Until this approach is approved/rejected, keeping it hardcoded.
    let px;

    let coefficient = this.declarationQuestions.nativeElement.offsetHeight / 850
    if (coefficient > 1) coefficient = 1

    if (this.applicant.hasBeenSuspended
      || this.applicant.hasInformationContraventionOrder
      || this.applicant.hasHadLimitsOrConditions
      || this.applicant.hasPharmaNetEverRevoked
      || this.applicant.hasRevocationBeenResolved) {


        px = (this.declarationQuestions.nativeElement.offsetHeight - 383) * coefficient;

    }
    else {
      px = 0;
    }
    console.log('ngAfterViewChecked', this.declarationQuestions.nativeElement.offsetHeight, coefficient, px);

    // if (px < 100) px = 0;
    this.viewHeight = px;
    this.changeRef.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // event.target.innerWidth;
    this.changeRef.detectChanges();
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
