import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prime-pill-badge',
  templateUrl: './pill-badge.component.html',
  styleUrls: ['./pill-badge.component.scss']
})
export class PillBadgeComponent implements OnInit {

  @Input() level: string;
  @Input() title: string;
  @Input() count: number;

  constructor() { }

  ngOnInit() {
  }

}
