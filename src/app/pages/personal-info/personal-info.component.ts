import { Component, OnInit } from '@angular/core';
// import {  }

@Component({
  selector: 'prime-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  /**
   * Goal: This component fires up the consent-modal.
   * From user perspective, personal info form is visible below modal.
   *
   * Use ViewChild to create modal and toggle it on?
   */

  constructor() { }

  ngOnInit() {
  }

}
