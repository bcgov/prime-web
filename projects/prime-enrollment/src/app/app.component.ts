import { Component, OnInit } from '@angular/core';
import { PrimeSharedAppComponentBase } from '@prime-core/prime-shared/components/prime-app-component/app.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommonLogger } from 'moh-common-lib/services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends PrimeSharedAppComponentBase implements OnInit {
  title = 'prime-enrollment';

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected titleService: Title,
              protected logger: CommonLogger ) {
    super(router, activatedRoute, titleService, logger);
  }

  ngOnInit() {
    super.ngOnInit();

    // Temporary - base component calls logging functionality
    this.logger.programName = 'prime-enrollment';
    this.logger.applicationId = this.objectId;
    this.logger.setURL( 'api/logging' );
  }
}
