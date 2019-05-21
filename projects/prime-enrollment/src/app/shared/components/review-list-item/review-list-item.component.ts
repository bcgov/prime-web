import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'enroll-review-list-item',
  template: `
    <!-- <div class="list-group-item"> -->
    <label *ngIf="label" class="font-weight-lighter col-6 ">{{ label }}</label>
    <span *ngIf="value" class="font-weight-bolder col-6">{{ value }}</span>
    <!-- </div> -->
  `,
  styleUrls: ['./review-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewListItemComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;
  constructor() {}

  ngOnInit() {}
}
