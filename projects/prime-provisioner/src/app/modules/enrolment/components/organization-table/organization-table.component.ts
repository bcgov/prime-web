import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prov-organization-table',
  template: `
    <p>
      organization-table works!
    </p>
  `,
  styleUrls: ['./organization-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
