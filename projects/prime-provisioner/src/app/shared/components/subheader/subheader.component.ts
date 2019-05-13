import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'prov-subheader',
  template: `
    <h3
      style="margin-bottom: 0px; margin-top: 21px;"
      class="font-weight-bolder"
    >
      {{ title }}
    </h3>
    <p class="border-bottom">{{ helperText }}</p>
  `,
  styleUrls: ['./subheader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubheaderComponent implements OnInit {
  @Input() title: string = null;
  @Input() helperText: string = null;
  constructor() {}

  ngOnInit() {}
}
