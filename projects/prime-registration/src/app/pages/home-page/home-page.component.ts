import { Component, OnInit } from '@angular/core';
import { PrimeConstants } from '../../models/prime-constants';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public mohRegistration = PrimeConstants.MOH_REGISTRATION;
  public bcscRegistration = PrimeConstants.BCSC_REGISTRATION;

  constructor() { }

  ngOnInit() {
  }

}
