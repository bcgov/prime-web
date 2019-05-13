import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'prov-page-header',
  template: `
    <h2>{{ title }}</h2>
    <p class="border-bottom">{{ helperText }}</p>
  `,
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent implements OnInit {
  @Input() title: string = null;
  @Input() helperText: string = null;

  constructor() {}

  ngOnInit() {}
}
