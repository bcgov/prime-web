import { Component, OnInit, forwardRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ControlContainer, NgForm } from '@angular/forms';
import { RegisterApiService } from './modules/registration/services/register-api.service';
import { PrimeSharedAppComponentBase } from '@prime-core/prime-shared/components/prime-app-component/app.component';

import { LoggerService, RegistrationEvent } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: ControlContainer, useExisting: forwardRef(() => NgForm) }
  ]
})
export class AppComponent extends PrimeSharedAppComponentBase implements OnInit {
  title = 'Prime';
  // TODO - Verify we can remove.
  // registrant = new Registrant();
  public skipLinkPath;

  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private logger: LoggerService,
               private registerApiService: RegisterApiService,
               private titleService: Title ) {
    super(router, activatedRoute, titleService);
  }

  ngOnInit() {
    super.ngOnInit();
    // session ID to track events
    // this.logger.applicationId = this.objectId;
    this.logger.programName = 'prime-registration';
    this.registerApiService.eventUUID = this.logger.applicationId;
  }

}
