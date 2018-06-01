import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prime-wizard-progress-bar',
  templateUrl: './wizard-progress-bar.component.html',
  styleUrls: ['./wizard-progress-bar.component.scss']
})
export class WizardProgressBarComponent implements OnInit {
  @Input() progressSteps: WizardProgressItem[] = [];

  constructor() { }

  ngOnInit() {
  }

  //FIXME: THIS IS WRONG! VALUES AREN'T CORRECT!  Need to work on the core math/algorithm of it.  Some rough numbers are down at bottom of file.
  calculateProgressPercentage(): Number {
    const denominator = this.progressSteps.length;
    const index = this.progressSteps.findIndex(x => x.isActive === true);
    const numerator = index + 1;

    if (denominator === 0 || numerator <= 0 ){
      // TODO: Replace with Exception
      console.error("Unable to calculate progress percentage. Is progressSteps properly defined?")
      return;
    }

    const value = Math.round((numerator / denominator) * 100);
    console.log('calculateProgressPercentage', value)
    // return value;
    return 21;

    // return (numerator / denominator) * 100;
  }

}

interface WizardProgressItem {
  title: String;
  isActive: boolean;
}
/**
1: 21.33
2: 47.33
3: 76.33

Need to restrict range, so that a value of 0 always winds up being our first item.



 */
