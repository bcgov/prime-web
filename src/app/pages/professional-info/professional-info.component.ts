import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
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
  public collegeVal: string;
  // public collegeModelVal: any;
  private needToUpdateCollegeVal: boolean = false;

  constructor(
    private applicantData: ApplicantDataService,
    private cdRef:ChangeDetectorRef) {
    super()
    this.applicant = applicantData.applicant;
  }

  ngAfterViewChecked(){
    this.cdRef.detectChanges();
    // if (this.needToUpdateCollegeVal){
    //   this.collegeVal = 'none';
    //   this.needToUpdateCollegeVal = false;
    // }
  }

  ngOnInit(){
    this.collegeList = this.defaultCollegeList();
    this.collegeVal = 'unchanged!';
  }

  ngAfterViewInit() {
    // ENABLE THIS LINE! TODO!
    // Commented out during dev.
    // this.consentModal.openModal();
  }

  collegeDebug(){
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
  setCollegeSelection(value : Colleges){
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

  private counter: number = 0;

  public onCollegeChange(value: string[]): void {;
    console.log('onCollegeChange', {count: value.length });

    if (value.indexOf(Colleges.None) !== -1 && value.length > 1 ){
      console.log('NONE selected, clearing!');
      // this.setCollegeSelection(Colleges.None);


      // this.collegeVal = '';

      this.collegeVal = this.counter++ % 2 == 0 ? 'none' : '';
      console.log('collegeVal', this.collegeVal);


      this.cdRef.detectChanges();
      // this.collegeVal = 'none';
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
  defaultCollegeList(): CollegeList[] {
  // defaultCollegeList(): any[] {
  // defaultCollegeList(disabled: boolean = false): CollegeList[] {
  // defaultCollegeList(disabled: boolean = false): any[] {
    return [
      {
        id: Colleges.None,
        text: 'None',
        // disabled: false,
      },
      // {
      //   id: 'NONE',
      //   text: 'NoneBoop',
      //   // disabled: false,
      // },
      {
        id: Colleges.CPSBC,
        text: 'College of Physicians and Surgeons of BC (CPSBC)',
        // // disabled: disabled
      },
      {
        id: Colleges.CPBC,
        text: 'College of Pharmacists of BC (CPBC)',
        // disabled: disabled
      },
      {
        id: Colleges.CRNBC,
        text: 'College of Registered Nurses of BC (CRNBC)',
        // disabled: disabled
      }
    ]
  }

  onChange(values: any){
    console.log('professional-info onchange: ', values);
  }

}
