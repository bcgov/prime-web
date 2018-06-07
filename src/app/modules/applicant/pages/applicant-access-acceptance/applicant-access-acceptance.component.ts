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

    //TODO: Remove this later, just for development
    //this.dataService.user.accessAcceptance = {renewalDate: new Date(); }
  }


  disableContinue() {
    return this.accessAcceptances
      .map(item => item.isAccepted)
      .filter(item => item === false).length >= 1;

  }

  }


