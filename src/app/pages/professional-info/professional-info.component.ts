import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantDataService } from '../../services/applicant-data.service';
import { Applicant } from '../../models/applicant';
import { ConsentModalComponent } from '../../core/consent-modal/consent-modal.component';
import { BaseComponent } from '../../core/base-component/base-component.component';
import { Colleges, CollegeList } from '../../models/colleges.enum';


@Component({
  selector: 'prime-professional-info',
  templateUrl: './professional-info.component.html',
  styleUrls: ['./professional-info.component.scss']
})
export class ProfessionalInfoComponent extends BaseComponent implements OnInit {
  public applicant: Applicant;
  @ViewChild(ConsentModalComponent) private consentModal: ConsentModalComponent;

  public Colleges: typeof Colleges = Colleges;
  public showError: boolean = false;
  public collegeList: CollegeList[];
  public collegeVal: string | string[];
  public collegeModelVal: any;
  private lastSelectedOption: string;

  constructor(
    private applicantData: ApplicantDataService,
    private cdRef: ChangeDetectorRef,
    private elementRef: ElementRef,
    private router: Router) {
    super()
    this.applicant = applicantData.applicant;
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  ngOnInit() {
    this.collegeList = this.defaultCollegeList();
    this.collegeVal = '';
    this.initSelect();
  }

  ngAfterViewInit() {
    if (!this.applicant.consentInfoCollection){
      this.consentModal.openModal();
    }
  }

  onConsented(consent){
    this.applicant.consentInfoCollection = consent;
  }

  collegeDebug() {
    console.log('collegeDebug');
  }

  /**
   * Sets the college selection value.
   */
  setCollegeSelection(value: Colleges[] | Colleges) {
    this.collegeVal = value;
    this.applicant.college = value;
  }

  initSelect() {
    $(this.elementRef.nativeElement).on("select2:select", 'select', function (evt: any) {
      var element = evt.params.data.element;
      var $element = $(element);

      $element.detach();
      $(this).append($element);
      $(this).trigger("change");
    });

  }

  private selectCounter: number = 0;
  public onCollegeChange(value: Colleges[]): void {
    let areOtherOptionsSelected : boolean = value instanceof Array ?
      !!value.filter(x => x !== Colleges.None).length
      : false;

    //Must be used in conjunction w/ initSelect's reordering. Otherwise will get the first item after sorting, which ignores the user input order.
    let firstSelected = this.elementRef.nativeElement.querySelectorAll('.select2-selection__rendered > li')[0].title

    //'None' is already selected only if it's the non-first option.
    let isNoneInPreviousSelection = !(firstSelected.toLowerCase() === "none");
    let isNoneInSelection = value.indexOf(Colleges.None) >= 0;

    //Case: Have items, select 'None' -> clear and show 'None'
    if (isNoneInSelection && !isNoneInPreviousSelection) {
      //This is a hackfix to trigger an update. Angular will auto filter onChange updates if you send the same value twice, so we quickly send a blank string before the value we want.
      this.collegeVal = this.selectCounter++ % 2 == 0 ? '' : 'none';
      this.cdRef.detectChanges();
      this.setCollegeSelection(Colleges.None);
      this.cdRef.detectChanges();
    }
    //Case: Have 'None', select items -> clear and show items.
    else if (isNoneInSelection && isNoneInPreviousSelection){
      this.collegeVal = value.filter(x => x.toLowerCase() !== 'none');
      this.cdRef.detectChanges();
    }
    else {
      this.setCollegeSelection(value)
    }
  }

  defaultCollegeList(): CollegeList[] {
    return [
      {
        id: Colleges.None,
        text: 'None',
      },
      {
        id: Colleges.CPSBC,
        text: 'College of Physicians and Surgeons of BC (CPSBC) - 91',
      },
      {
        id: Colleges.CPBC,
        text: 'College of Pharmacists of BC (CPBC) - P1',
      },
      {
        id: Colleges.CRNBC,
        text: 'College of Registered Nurses of BC (CRNBC) - 96',
      }
    ]
  }

  onChange(values: any) {
    console.log('professional-info onchange: ', values);
  }

  canContinue(): boolean {
    return true;
  }

  continue(): void {
    console.log('---------------\ncontinue');
    this.router.navigate(['site-access']);
  }

}
