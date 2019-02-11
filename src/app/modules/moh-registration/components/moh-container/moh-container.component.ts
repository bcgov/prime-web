import { Component, OnInit } from '@angular/core';
import { WizardProgressItem } from '../../../../shared-core/components/wizard-progress-bar/wizard-progress-bar.component';
import { pageRoutes } from '../../moh-registration-page-routing.module';

@Component({
  selector: 'prime-moh-container',
  templateUrl: './moh-container.component.html',
  styleUrls: ['./moh-container.component.scss']
})
export class MohContainerComponent implements OnInit {

  /** Route items for the stepper */
  progressSteps: WizardProgressItem[];

  constructor() {
    // Interface for wizard progress items
    this.progressSteps = pageRoutes.map(page => {
      if (page.path !== '') {
        return {
          title: this.convertRouteToTitle(page.path),
          route: page.path
        };
      }
    }).filter(x => x);
  }

  ngOnInit() {
    console.log( 'moh-container' );
  }
  /**
   * Converts a lower case string of a route in a user readable title.  e.g.
   * "personal-info" -> "Personal Info"
   *
   * @param {string} routePath
   */
  convertRouteToTitle(routePath: string): string {
    return routePath.split('-').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
  }
}
