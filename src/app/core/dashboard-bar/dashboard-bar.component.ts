import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prime-dashboard-bar',
  templateUrl: './dashboard-bar.component.html',
  styleUrls: ['./dashboard-bar.component.scss']
})
export class DashboardBarComponent implements OnInit {
  @Input() hideAddUserButton: boolean = false;
  @Input() nextPageLink: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
