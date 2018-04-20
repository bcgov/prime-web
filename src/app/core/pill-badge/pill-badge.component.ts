import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prime-pill-badge',
  templateUrl: './pill-badge.component.html',
  styleUrls: ['./pill-badge.component.scss']
})
export class PillBadgeComponent implements OnInit {

  @Input() alerts: any; //FIXME: Properly type this


  @Input() level: string;
  @Input() title: string;
  @Input() count: number;

  constructor() { }

  ngOnInit() {
    // TODO: Refactor once business logic is clarified. Handle multiple alerts and show title appropriately, plus tooltip.

    if (this.alerts){
      this.title = this.alerts.status;
      this.level = this.alerts.level;
      this.count = this.alerts.length;
    }
  }

}
