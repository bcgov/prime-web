import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'prov-panel',
  template: `
    <div class="header" (click)="open = !open">
      <a>
        <ng-container *ngIf="open; else closed">
          <i class="fa fa-caret-down mr-3"></i> </ng-container
        ><span
          ><u>{{ label }}</u></span
        >
      </a>
    </div>
    <div class="p-3 card-bg" *ngIf="open">
      <ng-content></ng-content>
    </div>
    <ng-template #closed>
      <i class="fa fa-caret-right mr-3"></i>
    </ng-template>
  `,
  styleUrls: ['./panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelComponent implements OnInit {
  @Input() label: string = null;
  // @Input() name: string = null;
  // @Input() siteId: string = null;
  @Input() open: boolean = false;
  constructor() {}

  ngOnInit() {}
}
