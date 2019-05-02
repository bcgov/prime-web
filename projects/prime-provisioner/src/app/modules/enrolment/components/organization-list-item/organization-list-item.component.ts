import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { ISiteInfo } from '@prime-prov/core/interfaces/i-organization';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'prov-organization-list-item',
  template: `
    <!-- <li > -->
    <div class="row" *ngIf="itm$ | async as itm">
      <div class="col-3">
        <a>{{ itm.name }} [{{ itm.id }}]</a>
        <label>{{ itm.address }}</label>
      </div>
      <span class="col">{{ itm.type }}</span>
      <span class="col">{{ itm.vendor }}</span>
      <span class="col">{{ itm.status }}</span>
      <span class="col">{{ itm.groupName }}</span>
    </div>
    <!-- </li> -->
  `,
  styleUrls: ['./organization-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationListItemComponent implements OnInit {
  @Input() itm: ISiteInfo;
  itm$: Observable<ISiteInfo>;
  constructor() {}

  ngOnInit() {
    return this.itm ? (this.itm$ = of(this.itm)) : null;
  }
}
