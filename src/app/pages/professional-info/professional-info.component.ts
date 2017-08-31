import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantDataService } from '../../services/applicant-data.service';
import { Applicant } from '../../models/applicant';
import { ConsentModalComponent } from '../../core/consent-modal/consent-modal.component';
import { BaseComponent } from '../../core/base-component/base-component.component';
import { Colleges, CollegeList } from '../../models/colleges.enum';
import { CollegeDataService } from '../../services/college-data.service';


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
    private router: Router,
    private collegeData: CollegeDataService) {
    super()
    this.applicant = applicantData.applicant;
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  ngOnInit() {
    this.collegeList = this.defaultCollegeList();
    this.collegeVal = this.applicant.college;
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
  // setCollegeSelection(value: Colleges[] | Colleges) {
  setCollegeSelection(value: Colleges[]) {
    this.collegeVal = value;
    this.applicant.college = <Colleges[]>value;
  }

  /**
   * Re-orders the selected elements in the Professional College multiselect box. Now they will be ordered in the same order the user selects them. This step is necessary in order for the code in onCollegeChange() to work, which enforces business logic rules relating to selecting 'None'.
   */
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
  /**
   * Must be used in conjunction w/ initSelect's reordering. Otherwise will get
   * the first item after sorting, which ignores the user input order.  Most of
   * the logic is about selecting "None", which results in this function being
   * fired multiple times in quick succession.
   * @param value An array of Colleges ids.
   */
  public onCollegeChange(value: Colleges[]): void {
    let firstSelected = this.elementRef.nativeElement.querySelectorAll('.select2-selection__rendered > li')[0].title

    //'None' is already selected only if it's the non-first option.
    let isNoneInPreviousSelection = !(firstSelected.toLowerCase() === "none");
    let isNoneInSelection = value.indexOf(Colleges.None) >= 0;

    //Case: Have items, select 'None' -> clear and show 'None'
    if (isNoneInSelection && !isNoneInPreviousSelection) {
      this.setCollegeSelection([Colleges.None]);
    }
    //Case: Have 'None', select items -> clear and show items.
    else if (isNoneInSelection && isNoneInPreviousSelection){
      this.collegeVal = value.filter(x => x.toLowerCase() !== 'none');
    }
    else {
      this.setCollegeSelection(value)
    }
  }

  defaultCollegeList(): CollegeList[] {
    return this.collegeData.defaultCollegeList();
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
