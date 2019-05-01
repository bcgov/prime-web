import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'prov-panel',
  template: `
    <div class="header row" (click)="open = !open">
      <a>
        <ng-container *ngIf="open; else closed">
          <i class="fa fa-caret-down col-2"></i> </ng-container
        >{{ label }}
      </a>
    </div>
    <div class="p-3">
      <ng-content *ngIf="open"></ng-content>
    </div>
    <ng-template #closed>
      <i class="fa fa-caret-right col-2"></i>
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
