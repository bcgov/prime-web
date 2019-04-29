import { Component, OnInit, forwardRef, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterApiService } from './modules/registration/services/register-api.service';
import { PrimeAppBase } from 'prime-core';
import { LoggerService } from './services/logger.service';
import { CommonLogger } from 'moh-common-lib/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends PrimeAppBase implements OnInit {
  title = 'Prime Registration';
  public skipLinkPath;

  constructor( protected router: Router,
               protected activatedRoute: ActivatedRoute,
               protected logger: LoggerService,
               private registerApiService: RegisterApiService,
               protected titleService: Title,
               @Inject('APP_VERSION') version ) {
    super( router, activatedRoute, titleService,
           logger as CommonLogger,
           version );
  }

  ngOnInit() {
    super.ngOnInit();

    // session ID to track events
    this.logger.applicationId = this.registerApiService.eventUUID;
    this.logger.programName = 'prime-registration';
  }
}
