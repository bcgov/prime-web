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
    <prov-panel [label]="org.name">
      <div class="card">
        <div class="card-header">
          <div class="row">
            <div class="col-3">
              <span>Site Info</span>
            </div>
            <div class="col"><span>Site Type</span></div>
            <div class="col"><span>Vendor</span></div>
            <div class="col"><span>Status</span></div>
            <div class="col"><span>Group Name</span></div>
          </div>
        </div>
        <div class="card-body">
          abcdef
        </div>
      </div>
    </prov-panel>
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
