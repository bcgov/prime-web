import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'prov-access-group-block',
  template: `
    <label class="font-weight-lighter">{{ label }}</label>
    <div>
      <p class="font-weight-bolder" *ngFor="let group of groups">{{ group }}</p>
    </div>
  `,
  styleUrls: ['./access-group-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccessGroupBlockComponent implements OnInit {
  @Input() label: string;
  @Input() groups: string[];

  constructor() {}

  ngOnInit() {}
}
