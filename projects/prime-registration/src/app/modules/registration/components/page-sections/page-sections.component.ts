import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'prime-page-sections',
  templateUrl: './page-sections.component.html',
  styleUrls: ['./page-sections.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageSectionsComponent implements OnInit {

  @Input() layout: 'double' | 'tips' | 'noTips' = 'tips';

  constructor() { }

  ngOnInit() {
  }

}
