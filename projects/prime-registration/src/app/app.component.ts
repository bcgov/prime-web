import * as version from '../../../../src/version.GENERATED';
import { Component, OnInit, forwardRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { CacheApiService } from '../../../../src/app/services/cache-api.service';
import { RegCacheService } from './services/reg-cache.service';
import { Registrant } from './modules/registration/models/registrant.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { RegistrationDataService } from './services/registration-data.service';
import { Base } from 'moh-common-lib/models';
import { RegisterApiService } from './modules/registration/services/register-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: ControlContainer, useExisting: forwardRef(() => NgForm) }
  ]
})
export class AppComponent extends Base implements OnInit {
  title = 'Prime';
  // TODO - Verify we can remove.
  // registrant = new Registrant();
  public skipLinkPath;
  private SKIP_CONTENT_HASH = '#content';

  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private registerApiService: RegisterApiService,
               private titleService: Title ) {
    super();
  }

  ngOnInit() {
    console.log('app component init');
    // This line was AUTO-GENERATED by moh-common-schematics:version-js. Feel free to move this line and/or delete the comment.
    version.success
      ? console.log('%c' + version.message, 'color: #036; font-size: 20px;')
      : console.error(version.message);

    // session ID to track events
    this.registerApiService.eventUUID = this.objectId;

    this.updateTitleOnRouteChange();
    this.router.events.pipe(
      filter(ev => ev instanceof NavigationEnd),
    ).subscribe(this.updateSkipContentLink.bind(this));

    this.updateSkipContentLink();

  }

  /**
   * Listen to every route change, and update the page title based on the
   * 'title' property in the route's data.
   */
  private updateTitleOnRouteChange() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      )
      .subscribe((data: { title?: string }) => {
        this.setTitle(data.title);
      });
  }

  /** Set the page title. Includes basic formatting and fallback */
  private setTitle(title?: string) {
    if (title) {
      this.titleService.setTitle(`Prime | ${title}`);
    } else {
      // Default title
      this.titleService.setTitle(this.title);
    }
  }

  routeIsActive(url: string): boolean {
    return this.router.url.includes(url);
  }

  updateSkipContentLink(){
    this.skipLinkPath = this.generateSkipToContentLink();
  }

  // Slightly complicated because we have to include the deployUrl in manually.
  // If deployUrl changes this code must too.

  private generateSkipToContentLink(): string {
    // don't add duplicate #contents
    if (window.location.href.indexOf(this.SKIP_CONTENT_HASH) !== -1) {
      return window.location.href;
    }
    return `${window.location.origin}${this.router.url}#content`;
  }


}
