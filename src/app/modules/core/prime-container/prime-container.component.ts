import { Component, OnInit, Input } from '@angular/core';
import { WizardProgressItem } from '../../../shared-core/components/wizard-progress-bar/wizard-progress-bar.component';

@Component({
  selector: 'prime-container',
  templateUrl: './prime-container.component.html',
  styleUrls: ['./prime-container.component.scss']
})
export class PrimeContainerComponent implements OnInit {

  /** Route items for the stepper */
  progressSteps: WizardProgressItem[];

  constructor() { }

  ngOnInit() {
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
