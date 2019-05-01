import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { OrganizationStateService } from './organization-state.service';

@Component({
  selector: 'prov-organization',
  template: `
    <common-page-framework layout="blank">
      <prov-page-header
        [title]="title"
        [helperText]="helperText"
      ></prov-page-header>
      <!-- <common-page-section layout="blank"> -->
      <!-- TODO: Search organizaiton input | Provisioner group -->
      <prov-search-provisioner-access
        [searchFc]="orgStateSvc.searchControl"
        [provisionerFc]="orgStateSvc.provisionerGroupControl"
        [orgOptions]="orgStateSvc.orgOptions | async"
      ></prov-search-provisioner-access>
      <ng-container *ngIf="orgStateSvc.searchResults | async as results">
        <prov-organization-table
          *ngFor="let result of results"
          [org]="result"
        ></prov-organization-table>
      </ng-container>
      <!-- TODO: accordian list -->
      <!-- TODO: sublist table w/ site info -->
      <!-- </common-page-section> -->
    </common-page-framework>
  `,
  styleUrls: ['./organization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  // TODO: figure out what hte state should be on this.
  // providers: [OrganizationStateService]
})
export class OrganizationComponent implements OnInit {
  title = 'Provisioner Access';
  helperText = 'Provisioner Access - helper text';
  constructor(public orgStateSvc: OrganizationStateService) {}

  ngOnInit() {}
}
