import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicantDataService } from '../../services/applicant-data.service';
import { Applicant } from '../../models/applicant';
import { ConsentModalComponent } from '../../core/consent-modal/consent-modal.component';
import { BaseComponent } from '../../core/base-component/base-component.component';
import { Colleges } from '../../models/colleges.enum';

@Component({
  selector: 'prime-professional-info',
  templateUrl: './professional-info.component.html',
  styleUrls: ['./professional-info.component.scss']
})
export class ProfessionalInfoComponent extends BaseComponent implements OnInit {
  public applicant: Applicant;
  @ViewChild(ConsentModalComponent) private consentModal: ConsentModalComponent;

  public Colleges: typeof Colleges = Colleges;

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

  // TODO - Create interfaces once we get real / non-dummy data here.
  get collegeList(): any {
    return [
      {
        id: Colleges.None,
        text: 'None'
      },
      {
        id: Colleges.CollegeOfPhysiciansAndSurgeonsOfBC,
        text: 'College of Physicians and Surgeons of BC (CPSBC)'
      },
      {
        id: Colleges.CollegeOfPharmacistsOfBC,
        text: 'College of Pharmacists of BC (CPBC)'
      },
      {
        id: Colleges.CollegeOfRegisteredNursesOfBC,
        text: 'College of Physicians and Nurses of BC (CPNBC)'
      }
    ]
  }

}
