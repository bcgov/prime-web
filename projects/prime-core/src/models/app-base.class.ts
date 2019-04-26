import { OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Base } from 'moh-common-lib/models';
import { CommonLogger } from 'moh-common-lib/services';

/**
 * PrimeAppBase is a class containing shared functionality for the
 * various "AppComponent"s for each individual prime application. The important
 * functionality is in the constructor and ngOnInit().  Unfortunately this does
 * not come bundled with a template and instead templates must be updated for
 * each project manually.
 *
 * **Note** - you MUST call super.ngOnInit() you have an ngOnInit() method in
 * your subclass. Otherwise, the title and accessability functions concerns
 * won't update.
 */
export class PrimeAppBase extends Base implements OnInit {
  title = 'Prime';
  public skipLinkPath;
  private SKIP_CONTENT_HASH = '#content';

  constructor( protected pRouter: Router,
               protected pActivatedRoute: ActivatedRoute,
               protected pTitleService: Title,
               protected logger: CommonLogger,
               @Inject('APP_VERSION') version ) {
    super();
    version.success
      ? console.log('%c' + version.message, 'color: #036; font-size: 20px;')
      : console.error(version.message);
  }

  ngOnInit() {
    this.updateTitleOnRouteChange();
    this.pRouter.events.pipe(
      filter(ev => ev instanceof NavigationEnd),
    ).subscribe(this.updateSkipContentLink.bind(this));

    this.updateSkipContentLink();
  }

  /**
   * Listen to every route change, and update the page title based on the
   * 'title' property in the route's data.
   */
  protected updateTitleOnRouteChange() {
    this.pRouter.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.pActivatedRoute),
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
        this.logger.log({
          event: 'navigation',
          title: data.title ? data.title : this.title,
          url: this.pRouter.url
        });
      });
  }

  /** Set the page title. Includes basic formatting and fallback */
  protected setTitle(title?: string) {
    if (title) {
      this.pTitleService.setTitle(`Prime | ${title}`);
    } else {
      // Default title
      this.pTitleService.setTitle(this.title);
    }
  }

  routeIsActive(url: string): boolean {
    return this.pRouter.url.includes(url);
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

  protected generateSkipToContentLink(): string {
    // don't add duplicate #contents
    if (window.location.href.indexOf(this.SKIP_CONTENT_HASH) !== -1) {
      return window.location.href;
    }
    return `${window.location.origin}${this.pRouter.url}#content`;
  }
}
