import { Component, OnInit } from '@angular/core';
import { mohPages } from '../../moh-registration-page-routing.module';
import { Router } from '@angular/router';
import { Container } from '../../../../shared-core/models/container';

@Component({
  selector: 'prime-moh-container',
  templateUrl: './moh-container.component.html',
  styleUrls: ['./moh-container.component.scss']
})
export class MohContainerComponent extends Container implements OnInit {

  constructor( public router: Router ) {
    super();
    this.setProgressSteps( mohPages );
  }

  ngOnInit() {
    console.log( 'moh-container  url: ' + this.router.url );
  }
}
