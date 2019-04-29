import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prov-review',
  template: `
    <p>
      review works!
    </p>
  `,
  styleUrls: ['./review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
