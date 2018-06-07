import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { Base } from '../../../../core/base/base.class';

@Component({
  selector: 'prime-wizard-progress-bar',
  templateUrl: './wizard-progress-bar.component.html',
  styleUrls: ['./wizard-progress-bar.component.scss']
})
export class WizardProgressBarComponent extends Base implements OnInit {
  @Input() progressSteps: WizardProgressItem[] = [];
  @ViewChild('stepContainer') stepContainer: ElementRef
  @ViewChildren('steps') steps: QueryList<ElementRef>;

  constructor(private router: Router) {
    super();
   }

  ngOnInit() {
  }

  calculateProgressPercentage(): Number {
    const denominator = this.progressSteps.length + 1;
    const numerator = this.activeIndex + 1;

    if (denominator === 0 || numerator <= 0 ){
      console.error("Unable to calculate progress percentage. Is progressSteps properly defined?")
      // Defaulting to full bar for now.
      return 100;
    }

    return Math.round((numerator / denominator) * 100);
  }

  get activeIndex(): number {
    return this.progressSteps.findIndex(x => this.router.url.includes(x.route));
  }

}

interface WizardProgressItem {
  title: string;
  route: string;
}
