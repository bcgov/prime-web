import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prime-page-sections',
  templateUrl: './page-sections.component.html',
  styleUrls: ['./page-sections.component.scss']
})
export class PageSectionsComponent implements OnInit {

  @Input() layout: 'double' | 'tips' | 'noTips' = 'tips';

  constructor() { }

  ngOnInit() {
  }

}
