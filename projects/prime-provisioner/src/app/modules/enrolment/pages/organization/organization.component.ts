import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { OrganizationStateService } from './organization-state.service';
import { ActivatedRoute } from '@angular/router';
import { EnrolmentStateService } from '../../services/enrolment-state.service';
import { Subscription } from 'rxjs';

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
export class OrganizationComponent implements OnInit, OnDestroy {
  title = 'Provisioner Access';
  helperText = 'Provisioner Access - helper text';
  urlSub: Subscription;
  constructor(
    private stateSvc: EnrolmentStateService,
    public orgStateSvc: OrganizationStateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.urlSub = this.route.url.subscribe(obs => this.stateSvc.findIndex(obs));
  }

  ngOnDestroy(): void {
    this.urlSub.unsubscribe();
  }
}
