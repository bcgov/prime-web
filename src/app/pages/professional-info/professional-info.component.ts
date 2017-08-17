import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicantDataService } from '../../services/applicant-data.service';
import { Applicant } from '../../models/applicant';
import { ConsentModalComponent } from '../../core/consent-modal/consent-modal.component';
import { BaseComponent } from '../../core/base-component/base-component.component';

@Component({
  selector: 'prime-professional-info',
  templateUrl: './professional-info.component.html',
  styleUrls: ['./professional-info.component.scss']
})
export class ProfessionalInfoComponent extends BaseComponent implements OnInit {
  public applicant: Applicant;
  @ViewChild(ConsentModalComponent) private consentModal: ConsentModalComponent;

  constructor(private applicantData: ApplicantDataService) {
    super()
    this.applicant = applicantData.applicant;
  }

  ngAfterViewInit() {
    // ENABLE THIS LINE! TODO!
    // Commented out during dev.
    // this.consentModal.openModal();
  }

  get collegeList(): any {
    return [
      {
        id: 'basic1',
        text: 'Basic 1'
      },
      {
        id: 'basic2',
        disabled: true,
        text: 'Basic 2'
      },
      {
        id: 'basic3',
        text: 'Basic 3'
      },
      {
        id: 'basic4',
        text: 'Basic 4'
      }
    ]
  }

  setDeviceProvider(val: boolean): void {
    this.applicant.isDeviceProvider = val;
  }

  continue(): void {
    console.log('---------------\ncontinue');
  }

}
