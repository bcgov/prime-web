import {Component, Input, OnInit} from '@angular/core';
import { ApplicantAccessAcceptance} from './applicant-access-acceptance';
import {PrimeDataService} from '../../../../services/prime-data.service';

@Component({
  selector: 'prime-applicant-access-acceptance',
  templateUrl: './applicant-access-acceptance.component.html',
  styleUrls: ['./applicant-access-acceptance.component.scss']
})
export class ApplicantAccessAcceptanceComponent implements OnInit {

  isDeclareChecked: boolean = false;

  accessAcceptances = [
    new ApplicantAccessAcceptance('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam nihil quisquam officiis. Voluptates ad nisi possimus maxime voluptatum. Quis accusamus officiis rerum odit reiciendis saepe sapiente alias quisquam, dignissimos voluptatibus.', false),
    new ApplicantAccessAcceptance('Officiis soluta, adipisci distinctio ipsum magni mollitia quasi quos fugit voluptatibus. Deleniti architecto, quasi placeat reiciendis, nostrum eos laudantium repellendus aspernatur, dicta consequuntur esse quas molestiae officiis laboriosam temporibus sed.', false),
    new ApplicantAccessAcceptance('Nesciunt, inventore, qui molestiae repellendus corporis architecto culpa perspiciatis accusantium, hic eos sequi velit consectetur at quae. Labore, ratione minima! Quas sint facilis laboriosam eaque rerum amet deserunt reiciendis pariatur?', false)
  ];

  constructor(private dataService: PrimeDataService) { }

  /** Each boolean is bound to a checkbox. Useful for validation. */
  get allCheckboxes(): boolean[]{
    return this.accessAcceptances
      .map(item => item.isAccepted)
      .concat(this.isDeclareChecked);
  }

  ngOnInit() {
    this.loadDataFromApplicant();
  }

  get applicant() {
    return this.dataService.user;
  }


  shouldShowControls() {
    let isChanged = false;
    for (let i = 0; i < this.accessAcceptances.length; i++) {
      const item = this.accessAcceptances[i];
      if (item.isAccepted !== this.applicant.accessAcceptance[i]) {
        isChanged = true;
      }
    }

    if (this.isDeclareChecked !== this.applicant.isDeclaredCheck) {
      isChanged = true;
    }

    return isChanged;
  }

  disableContinue() {
    return !this.isDeclareChecked;
    // return this.allCheckboxes.filter(item => item !== true).length >= 1;
  }

  save() {
    this.applicant.accessAcceptance = this.accessAcceptances.map(x => x.isAccepted)

    this.applicant.isDeclaredCheck = this.isDeclareChecked;
  }

  cancel() {
    this.loadDataFromApplicant();
  }


  private loadDataFromApplicant() {
    for (let i = 0; i < this.accessAcceptances.length; i++) {
      const item = this.accessAcceptances[i];
      item.isAccepted = this.applicant.accessAcceptance[i];
    }
    this.isDeclareChecked = this.applicant.isDeclaredCheck;
  }

}


