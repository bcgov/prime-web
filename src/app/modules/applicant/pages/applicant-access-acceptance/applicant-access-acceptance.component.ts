import {Component, Input, OnInit} from '@angular/core';
import { ApplicantAccessAcceptance} from './applicant-access-acceptance';

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
    new ApplicantAccessAcceptance('jfwoejo', false),
    new ApplicantAccessAcceptance('jfwoejo', false)

  ];

  constructor() { }

  ngOnInit() {
  }


  shouldDisable() {
    // Are all checkboxes checked? Loop over accessAceptance and check isAccepted
    return false;
  }
}

