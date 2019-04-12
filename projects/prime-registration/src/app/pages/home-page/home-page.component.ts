import { Component, OnInit } from '@angular/core';
import { RegistrationConstants } from '../../modules/registration/models/registration-constants.model';

@Component({
  selector: 'reg-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public mohRegistration = RegistrationConstants.MOH_REGISTRATION;
  public bcscRegistration = RegistrationConstants.BCSC_REGISTRATION;

  constructor() { }

  ngOnInit() {
  }

}
