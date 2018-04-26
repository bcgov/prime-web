import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prime-pill-badge',
  templateUrl: './pill-badge.component.html',
  styleUrls: ['./pill-badge.component.scss']
})
export class PillBadgeComponent implements OnInit {

  //FIXME: Convert to 'Alert' class once done, properly type.
  @Input() alerts: any;
  distinctBadges: any[] = [];


  @Input() level: string;
  @Input() title: string;
  @Input() count: number;

  /** Only show an icon, and use a tooltip to reveal text. */
  @Input() iconOnly: boolean = false;

  constructor() { }

  ngOnInit() {
    // Currently Alerts can be a single alert, or an array. If it's an array, we want to de-dupe them and add a count.

    this.count = this.alerts.length;

    // Process Single
    if (this.alerts && !this.alerts.length){
      this.title = this.alerts.status;
      this.level = this.alerts.level;

      this.distinctBadges = [{
        title: this.alerts.status,
        level: this.alerts.level,
        count: 0,
      }];
    }

    // Process Array
    if (this.alerts && this.alerts.length){
      const alertTypes = this.alerts.map(x => x.status)
      .filter(this.filterUnique);

      this.distinctBadges = alertTypes.map(type => {
        const alertOfType = this.alerts.filter(x => x.status === type);
        return {
          title: type, // same for all in array
          level: alertOfType[0].level, // Level is same for all in array
          count: alertOfType.length
        }
      });


    }
  }

  private filterUnique(x, i, a){
    return x && a.indexOf(x) === i
  }

}
