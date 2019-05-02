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
            <div class="col-2"><span>Group Name</span></div>
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" *ngFor="let site of org.sites">
            <prov-organization-list-item
              [itm]="site"
            ></prov-organization-list-item>
          </li>
          <!-- <li class="list-group-item">
            <prov-organization-list-item></prov-organization-list-item>
          </li> -->
        </ul>
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
