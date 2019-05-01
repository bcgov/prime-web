import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { IOrganization } from '@prime-prov/core/interfaces/i-organization';

@Component({
  selector: 'prov-organization-table',
  template: `
    <!-- TODO: accordion -->
    <prov-panel [label]="org.name"> abcd </prov-panel>
    <!-- TODO: list header - use panel -->
    <!-- TODO: list items: list? -->
  `,
  styleUrls: ['./organization-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationTableComponent implements OnInit {
  @Input() org: IOrganization;
  constructor() {}

  ngOnInit() {}
}
