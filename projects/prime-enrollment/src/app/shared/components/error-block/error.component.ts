import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'enroll-error',
  template: `
    <span *ngIf="touched && !valid; else elseBlock" class="text-warning"
      >{{ label }} is invalid</span
    >
    <ng-template #elseBlock>
      <div class="else-block"></div>
    </ng-template>
  `,
  styleUrls: ['./error-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent implements OnInit {
  @Input() label = 'field';
  @Input() valid: boolean;
  @Input() touched: boolean;
  constructor() {}

  ngOnInit() {}
}
