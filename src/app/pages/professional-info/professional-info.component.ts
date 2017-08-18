import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor(private applicantData: ApplicantDataService) {
    super()
    this.applicant = applicantData.applicant;
  }

  ngAfterViewInit() {
    // ENABLE THIS LINE! TODO!
    // Commented out during dev.
    // this.consentModal.openModal();
  }

  public onCollegeChange(value : Colleges): void {
    this.applicant.college = value;
  }

  setDeviceProvider(val: boolean): void {
    this.applicant.isDeviceProvider = val;
  }

  continue(): void {
    console.log('---------------\ncontinue');
  }

  get collegeList(): CollegeList[] {
    return [
      // It's necessary to have a blank option for the placeholder to work.
      {
        id: Colleges.Unselected,
        text: '',
      },
      {
        id: Colleges.None,
        text: 'None'
      },
      {
        id: Colleges.CPSBC,
        text: 'College of Physicians and Surgeons of BC (CPSBC)'
      },
      {
        id: Colleges.CPBC,
        text: 'College of Pharmacists of BC (CPBC)'
      },
      {
        id: Colleges.CRNBC,
        text: 'College of Registered Nurses of BC (CRNBC)'
      }
    ]
  }

  onChange(values: any){
    console.log('professional-info onchange: ', values);
  }

}
