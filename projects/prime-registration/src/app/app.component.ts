// import * as version from '@prime-core/version.GENERATED';
import { Component, OnInit, forwardRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
// import { CacheApiService } from '../../../../src/app/services/cache-api.service';
// import { RegCacheService } from './services/reg-cache.service';
// import { Registrant } from './modules/registration/models/registrant.model';
import { ControlContainer, NgForm } from '@angular/forms';
// import { RegistrationDataService } from './services/registration-data.service';
// import { Base } from 'moh-common-lib/models';
import { RegisterApiService } from './modules/registration/services/register-api.service';
import { PrimeSharedAppComponent } from '@prime-core/prime-shared/components/prime-app-component/app.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: ControlContainer, useExisting: forwardRef(() => NgForm) }
  ]
})
export class AppComponent extends PrimeSharedAppComponent implements OnInit {
  title = 'Prime';
  // TODO - Verify we can remove.
  // registrant = new Registrant();
  public skipLinkPath;

  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private registerApiService: RegisterApiService,
               private titleService: Title ) {
    super(router, activatedRoute, titleService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
