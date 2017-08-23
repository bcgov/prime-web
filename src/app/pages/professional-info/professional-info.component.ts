import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { ApplicantDataService } from '../../services/applicant-data.service';
import { Applicant } from '../../models/applicant';
import { ConsentModalComponent } from '../../core/consent-modal/consent-modal.component';
import { BaseComponent } from '../../core/base-component/base-component.component';
import { Colleges, CollegeList } from '../../models/colleges.enum';

import { Select2Component } from 'ng2-select2';


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
  private needToUpdateCollegeVal: boolean = false;
  private lastSelectedOption: string;

  constructor(
    private applicantData: ApplicantDataService,
    private cdRef: ChangeDetectorRef,
    private elementRef: ElementRef) {
    super()
    this.applicant = applicantData.applicant;
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
    // if (this.needToUpdateCollegeVal){
    //   this.collegeVal = 'none';
    //   this.needToUpdateCollegeVal = false;
    // }
  }

  ngOnInit() {
    this.collegeList = this.defaultCollegeList();
    this.collegeVal = 'unchanged!';
    this.initSelect();
  }

  ngAfterViewInit() {
    // ENABLE THIS LINE! TODO!
    // Commented out during dev.
    // this.consentModal.openModal();
  }

  collegeDebug() {
    console.log('collegeDebug');
    // // this.setCollegeSelection(Colleges.None);
    // // this.collegeList[0]._refresh = Date.now(); //won't work, must change reference id


    // // Timeout works here as a button, but leads to infinite loop if called from ngOnChanges. Boooo!
    // this.collegeVal = '';
    // setTimeout(() => {
    //   this.collegeVal = 'none';
    //   console.log('collegeDebug done');
    // }, 0);
  }

  // ngDoCheck(){
  //   console.log('ngDoCheck called')
  //   this.cdRef.detectChanges();
  // }

  /**
   * Sets the college selection value.
   */
  setCollegeSelection(value: Colleges) {
    //Angular won't fire an onChange event if we pass in the same data (e.g. pass in 'none' two times in a row). Solution is to use a timeout and pass two separate values in quick succession.

    // NOT WORKING! Getting a bad loop here when changing it twice.
    //Other ideas - switch between '' and 'none'. Get duplicate 'none' values but make sure they don't show up.  Find other ways to trigger a change, e.g. by changing collegeList.

    //zeroes input, but we want 'none'.
    // this.collegeVal = Date.now().toString();
    //also works at zeroing input
    // this.collegeList = this.defaultCollegeList();

    // this.collegeList = this.defaultCollegeList();
    // this.collegeVal = value;

    //todo - use this in ngAfterViewChecked and update collegeVal there?
    this.collegeVal = 'none';
    this.needToUpdateCollegeVal = true;
    this.applicant.college = value;

  }

  initSelect() {
    let self = this;

    //Problem - This listener fires AFTER onCollegeChange, so lastSelectedOption is wrong.
    $(this.elementRef.nativeElement).on("select2:select", 'select', function (evt: any) {
    // $(this.elementRef.nativeElement)
    // .on("select2:select", 'select', (evt: any) => {
      // console.log('initSelect called. evt: ', );
      var element = evt.params.data.element;
      var $element = $(element);

      // console.log('Select2A:', $element.val())

      $element.detach();
      $(this).append($element);
      $(this).trigger("change");

      // console.log('last selected option:', $element.val())
      // self.lastSelectedOption = $element.val();
      // console.log('done changing select2', )
      // console.log('Select2B:', $element.val())

    });

  }

  private counter: number = 0;

  /**
   * Todo - finish off this function!
   *
   */
  // public onCollegeChange(value: string[]): void {
  public onCollegeChange(select2Element: any): void {
    let value = select2Element.element.val();
    // let mostRecentVal = $(select2Element.element).find('option:last').val()

    let areOtherOptionsSelected: boolean = !!value.filter(x => x !== Colleges.None).length;

    //Must be used in conjunction w/ initSelect's reordering. Otherwise will get the first item after sorting, which ignores the user input order.
    let firstSelected = this.elementRef.nativeElement.querySelectorAll('.select2-selection__rendered > li')[0].title

    //'None' is already selected only if it's the non-first option.
    let isNoneInPreviousSelection = !(firstSelected === "None");
    let isNoneInSelection = value.indexOf(Colleges.None) >= 0;




    console.log('onCollegeChange', value, isNoneInPreviousSelection);
    // console.log('onCollegeChange templateR', value, select2Element);


    //1. Have items, select 'None' -> clear and show 'None'
    //2. Have 'None', select items -> clear and show items.

    //Problem - Can't detect the order that items are added.
    //can't detect if 'Have items' or 'Have none', only what the end selection is.


    //NOTE - Not sure if both these if statements are working together
    // if (value.indexOf(Colleges.None) === 0 && areOtherOptionsSelected) {
    // if (value.indexOf(Colleges.None) >= 0) {
    if (isNoneInSelection && !isNoneInPreviousSelection) {

      //THIS PART IS WORKING REALLY WELL!
      //Only problem - Once 'none' is active, can't easily add other sections
      //It clears them. Need to find out how to auto-remove 'None'. Slice isn't working for some reason.
      //Case: Have items, select 'None' -> clear and show 'None'
      console.log('NoneA')
      this.collegeVal = this.counter++ % 2 == 0 ? '' : 'none';
      this.cdRef.detectChanges();
      this.collegeVal = 'none';
      this.cdRef.detectChanges();
    }
    else if (isNoneInSelection && isNoneInPreviousSelection){
      //Case: Have 'None', select items -> clear and show items.
      console.log('NoneC!!!', value)
      this.collegeVal = value.filter(x => x.toLowerCase() !== 'none');
      this.cdRef.detectChanges();
    }
    else {
      //Case: ???
      // console.log('None already selected, remove None');
      console.log('NoneB');
      //If user selects a college when 'none' is selected, remove 'none'
      // this.collegeVal = value.slice(1);
      // this.cdRef.detectChanges();
    }


    if (value.indexOf(Colleges.None) !== -1 && value.length > 1) {
      // console.log('NONE selected, clearing!');
      // this.setCollegeSelection(Colleges.None);

      // //NOTE - Not sure if both these if statements are working together
      // if (value.indexOf(Colleges.None) === 0) {
      //   //THIS PART IS WORKING REALLY WELL!
      //   //Only problem - Once 'none' is active, can't easily add other sections
      //   //It clears them. Need to find out how to auto-remove 'None'. Slice isn't working for some reason.
      //   console.log('NoneA')
      //   // this.collegeVal = this.counter++ % 2 == 0 ? '' : 'none';
      //   // this.cdRef.detectChanges();
      //   // this.collegeVal = 'none';
      //   // this.cdRef.detectChanges();
      // }
      // else {
      //   // console.log('None already selected, remove None');
      //   console.log('NoneB');
      //   //If user selects a college when 'none' is selected, remove 'none'
      //   // this.collegeVal = value.slice(1);
      //   // this.cdRef.detectChanges();
      // }



      // //THIS IS PARTIALLY WORKING!
      // //Problem - it always blanks out the value to empty, but we want 'None'
      // // this.collegeVal = this.counter++ % 2 == 0 ? 'none' : '';
      // this.collegeVal = this.counter++ % 2 == 0 ? '' : 'none';
      // this.cdRef.detectChanges();
      // this.collegeVal = 'none';
      // //now need to disable other results until 'None' is removed.
      // // this.defaultCollegeList(true);
      // this.cdRef.detectChanges();
    }

  }

  setDeviceProvider(val: boolean): void {
    this.applicant.isDeviceProvider = val;
  }

  continue(): void {
    console.log('---------------\ncontinue');
  }

  // get defaultCollegeList(): CollegeList[] {
  // defaultCollegeList(): CollegeList[] {
  // defaultCollegeList(): any[] {
  defaultCollegeList(disabled: boolean = false): CollegeList[] {
    // defaultCollegeList(disabled: boolean = false): any[] {
    return [
      {
        id: Colleges.None,
        text: 'None',
        // disabled: false,
      },
      // {
      //   // id: 'NONE',
      //   id: Colleges.None,
      //   text: 'None2',
      //   // disabled: false,
      // },
      {
        id: Colleges.CPSBC,
        text: 'College of Physicians and Surgeons of BC (CPSBC)',
        disabled: disabled
      },
      {
        id: Colleges.CPBC,
        text: 'College of Pharmacists of BC (CPBC)',
        disabled: disabled
      },
      {
        id: Colleges.CRNBC,
        text: 'College of Registered Nurses of BC (CRNBC)',
        disabled: disabled
      }
    ]
  }

  onChange(values: any) {
    console.log('professional-info onchange: ', values);
  }

}
