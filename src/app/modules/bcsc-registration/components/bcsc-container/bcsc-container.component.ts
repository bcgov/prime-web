import { Component, OnInit } from '@angular/core';
import { bcscPages } from '../../bcsc-registration-page-routing.module';
import { Router } from '@angular/router';
import { Container } from 'moh-common-lib/models';

@Component({
  selector: 'prime-bcsc-container',
  templateUrl: './bcsc-container.component.html',
  styleUrls: ['./bcsc-container.component.scss']
})
export class BcscContainerComponent extends Container implements OnInit {

  constructor( public router: Router ) {
    super();
    this.setProgressSteps( bcscPages );
  }

  ngOnInit() {
  }
}
