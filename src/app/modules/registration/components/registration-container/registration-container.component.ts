import { Component, OnInit } from '@angular/core';
import {pageRoutes} from '../../registration-page-routing.module';
import {WizardProgressItem} from '../../../core/components/wizard-progress-bar/wizard-progress-bar.component';
import {Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'prime-registration-container',
  templateUrl: './registration-container.component.html',
  styleUrls: ['./registration-container.component.scss']
})
export class RegistrationContainerComponent implements OnInit {

  public allowLinks: boolean = !environment.production ? true : false;

  constructor( private router: Router ) { }

  ngOnInit() {
    this.progressSteps = pageRoutes.map(x => {
      return {
        title: this.convertRouteToTitle(x.path),
        route: x.path,
      };
    });
  }

  progressSteps: WizardProgressItem[];

  /**
   * Converts a lower case string of a route in a user readable title.  e.g.
   * "document-upload" -> "Document Upload"
   *
   * @param {string} routePath
   */
  convertRouteToTitle(routePath: string): string{
    return routePath.split('-').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
  }

  /**
   * Navigates through the pages
   */
  continue() {
    // Find current index of URL
    let idx = this.progressSteps.findIndex( x => {
      return this.router.url.endsWith( x.route ); } );

    // Case were route is blank
    if ( -1 === idx ) { idx = 0; }

    if ( this.progressSteps.length > idx + 1 ) {
      // Navigate next page
      this.router.navigate(['/register/' + this.progressSteps[idx + 1].route] );
    }
  }
}
