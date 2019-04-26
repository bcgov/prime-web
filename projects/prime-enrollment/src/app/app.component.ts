import { Component, OnInit, Inject } from '@angular/core';
import { PrimeAppBase } from 'prime-core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommonLogger } from 'moh-common-lib/services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends PrimeAppBase implements OnInit {
  title = 'prime-enrollment';

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected titleService: Title,
              protected logger: CommonLogger,
              @Inject('APP_VERSION') version ) {
    super(router, activatedRoute, titleService, logger, version);
  }

  ngOnInit() {
    super.ngOnInit();

    // Temporary - base component calls logging functionality
    this.logger.programName = 'prime-enrollment';
    this.logger.applicationId = this.objectId;
    this.logger.setURL( 'api/logging' );
  }
}
