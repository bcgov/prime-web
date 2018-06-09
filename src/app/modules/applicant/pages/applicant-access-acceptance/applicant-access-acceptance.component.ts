import {Component, Input, OnInit} from '@angular/core';
import { ApplicantAccessAcceptance} from './applicant-access-acceptance';
import {PrimeDataService} from '../../../../services/prime-data.service';

@Component({
  selector: 'prime-applicant-access-acceptance',
  templateUrl: './applicant-access-acceptance.component.html',
  styleUrls: ['./applicant-access-acceptance.component.scss']
})
export class ApplicantAccessAcceptanceComponent implements OnInit {

  accessAcceptances = [
    new ApplicantAccessAcceptance( 'oiweruwioresfsfdsfsdfssdfsfsdfsfdsdfjsfdjsjfsdfslfjsldfsdklfksfdskfjsjfklsflsfjl' +
      'wejifojwoifjwjiofjwojefwiaojefwiojfeoiwjfiowjfowjefoiwjfiowjefoiwejfi' +
      'jfwoijfowijfojfowijefwoiajfwoijfewoijfwoijfwoifjwoiejfwifjwioefjwiejfowijefiwojefowjefjwefoijwefjwfo' +
      'jfowjfwiojfwfjwfjwifjwofjwiofjwoejfowijfeoiwjefoifwfwe', false),
    new ApplicantAccessAcceptance('vsnoefnonvnvowehriowhefwovnwvonwvwoevnwioe' +
      'weiruvnwovnoqropewugbmnnjwepjwvwpjvwpevkwpeowjeorjweogjweviowjegvowefjwoefjw' +
      'yjj,bmvnwqiwuqiweqivmbneotueoyuroruhiberobjebojeoejberoberberberber' +
      'uqqoheiogvnwevwenvkwemvwevwepvmwefwef', false),
    new ApplicantAccessAcceptance('bvmbuourjnvnlksdjfeoiuiouteriouopbbvihfuiefh' +
      'ewuunmmozmncxbsdisghiquwegoierjperbjebpojerpbjerbperjbperbjeoprbnbngnbjkfglmvnbzhgqpithbn' +
      'bvzgdcyfweuyfguygvievherboejrberbjoerbjoerbjbrtb', false)

  ];

  constructor(private dataService: PrimeDataService) { }

  ngOnInit() {

      for (let i = 0; i < this.accessAcceptances.length; i++) {
        const item = this.accessAcceptances[i];
        item.isAccepted = this.applicant.accessAcceptance[i];
    }

  }

  get applicant() {
    return this.dataService.user;
  }


  shouldShowControls() {
    let isChanged  = false;
    for (let i = 0; i < this.accessAcceptances.length; i++) {
      const item = this.accessAcceptances[i];
      if( item.isAccepted !== this.applicant.accessAcceptance[i]){
        isChanged =  true;
      }
    }
    return isChanged;
  }

  disableContinue() {
    return this.accessAcceptances
      .map(item => item.isAccepted)
      .filter(item => item === false).length >= 1;

  }

  save() {
    this.applicant.accessAcceptance = this.accessAcceptances.map(x => x.isAccepted)
  }

  cancel() {
    for (let i = 0; i < this.accessAcceptances.length; i++) {
      const item = this.accessAcceptances[i];
      item.isAccepted = this.applicant.accessAcceptance[i];
    }

  }


  }


