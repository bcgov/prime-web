import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prov-organization',
  template: `
    <common-page-framework layout="blank">
      <prov-page-header
        [title]="title"
        [helperText]="helperText"
      ></prov-page-header>
    </common-page-framework>
  `,
  styleUrls: ['./organization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationComponent implements OnInit {
  title = 'Provisioner Access';
  helperText = 'Provisioner Access - helper text';
  constructor() {}

  ngOnInit() {}
}
