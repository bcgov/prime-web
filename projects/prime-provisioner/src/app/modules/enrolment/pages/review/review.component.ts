import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prov-review',
  template: `
    <common-page-framework layout="blank">
      <prov-page-header
        [title]="title"
        [helperText]="helperText"
      ></prov-page-header>
    </common-page-framework>
  `,
  styleUrls: ['./review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewComponent implements OnInit {
  title = 'Application Review';
  helperText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit..';
  constructor() {}

  ngOnInit() {}
}
