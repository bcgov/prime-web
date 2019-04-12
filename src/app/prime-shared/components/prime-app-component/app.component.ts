import { Component, OnInit, forwardRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { ControlContainer, NgForm } from '@angular/forms';
import { Base } from 'moh-common-lib/models';
import * as version from '@prime-core/version.GENERATED.ts';

/**
 * PrimeSharedAppComponent is a class containing shared functionality for the
 * various "AppComponent"s for each individual prime application. The important
 * functionality is in the constructor and ngOnInit().  Unfortunately this does
 * not come bundled with a template and instead templates must be updated for
 * each project manually.
 *
 * **Note** - you MUST call super.ngOnInit() you have an ngOnInit() method in
 * your subclass. Otherwise, the title and accessability functions concerns
 * won't update.
 */
export class PrimeSharedAppComponentBase extends Base implements OnInit {
  title = 'Prime';
  public skipLinkPath;
  private SKIP_CONTENT_HASH = '#content';

  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private titleService: Title ) {
    super();
    version.success
      ? console.log('%c' + version.message, 'color: #036; font-size: 20px;')
      : console.error(version.message);
  }

  ngOnInit() {
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

  /**
   * Updates the skipToContent link which is an a11y concern.  Importantly the
   * skipToContent link must include the relevant routes / subpages that the
   * user is currently on.
   */
  updateSkipContentLink() {
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
