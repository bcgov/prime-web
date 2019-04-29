import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prov-organization',
  template: `
    <p>
      organization works!
    </p>
  `,
  styleUrls: ['./organization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
