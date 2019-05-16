import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'lib-review-list-item',
  templateUrl: './review-list-item.component.html',
  styleUrls: ['./review-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewListItemComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;
  constructor() {}

  ngOnInit() {}
}
