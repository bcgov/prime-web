import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Base } from '../base/base.class';
import { SiteAccess } from '../../models/sites.model';
import { EnrollmentStatus } from '../../models/prime.models';
import { growVertical } from '../../animations/animations';
@Component({
  selector: 'prime-miller-item-checkbox',
  templateUrl: './miller-item-checkbox.component.html',
  styleUrls: ['./miller-item-checkbox.component.scss'],
  animations: [growVertical]
})
export class MillerItemCheckboxComponent extends Base implements OnInit {

  //TODO: Add interface for miller items
  @Input() items: any[];
  @Input() selectedSiteAccess;
  @Output() onCheck = new EventEmitter<any>();

  constructor() {
    super();
  }



  public today;
  ngOnInit() {
    const today = new Date();
    this.today =  { year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDate() }
  }

  ngOnDestroy(){
    [].concat(... this.items.map(site => site.siteAccess))
    .map(sa => sa.pendingChanges = false);
  }

  onItemClick(event, item) {
    const sa = this.getSiteAccessForItem(item);
    if (sa && sa.status === EnrollmentStatus.Active){
      sa.pendingChanges = item.checked;
    }


    item.checked = !item.checked;
    this.onCheck.emit(item);

    if (event.target.type !== 'checkbox'){
      // Stop the event from double-firing.
      return false;
    }
  }

  //TODO: Test this works with other MillerColumn config type.
  /**
   * Only returns SiteAccess relevant to the selection user has made in previous
   * column. If a Site has SA's to multiple different people but only one person
   * is selected, it will only show the SA's relevant to that one user.
   */
  private getSiteAccessForItem(item): SiteAccess {
    return item.siteAccess.filter(itemSA => {
      return this.selectedSiteAccess.indexOf(itemSA) !== -1;
    })[0];
  }

  isItemActive(item): boolean {
   let siteAccess = this.getSiteAccessForItem(item);
   return siteAccess && siteAccess.status == EnrollmentStatus.Active;
  }

}
