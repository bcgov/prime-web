import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'prov-error',
  template: `
    <span *ngIf="touched && !valid; else elseBlock" class="text-danger"
      >{{ label }} is required</span
    >
    <ng-template #elseBlock>
      <div class="else-block"></div>
    </ng-template>
  `,
  styleUrls: ['./error.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent implements OnInit {
  @Input() label = 'field';
  @Input() valid: boolean;
  @Input() touched: boolean;
  constructor() {}

  ngOnInit() {}
}
