import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prov-self-declaration',
  template: `
    <common-page-framework layout="blank">
      <prov-page-header
        [title]="title"
        [helperText]="helperText"
      ></prov-page-header>
    </common-page-framework>
  `,
  styleUrls: ['./self-declaration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelfDeclarationComponent implements OnInit {
  title = 'Self Declaration';
  helperText = 'Self Declaration - helper text';
  constructor() {}

  ngOnInit() {}
}
