import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { growVertical } from '../../../../animations/animations';
import { EnrollmentStatus } from '../../../../models/enrollment-status.enum';
import { Person } from '../../../../models/person.model';
import { Site, SiteAccess } from '../../../../models/sites.model';
import { Base } from '../../../../core/base/base.class';
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
  @Output() onPendingChanges = new EventEmitter<any>();
  /** Incomplete! Idea is it will store all pending changes, and after the user
   * clicks 'Save' then we empty this array and store the data in the real data
   * stores (and cancel just clears it). */
  private _allPendingChanges: SiteAccess[] = [];

  constructor() {
    super();
  }

  public today;
  ngOnInit() {
    const today = new Date();
    this.today =  { year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDate() }
    //console.log(this.selectedSiteAccess[0].requestDate);
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

    if (typeof sa === 'undefined') {
      // User has selected a blank item, creating new SA.
      this.initiateSiteAccess(item);
    }

    if (item.checked && this._allPendingChanges.includes(sa)) {
      // User is undoing a change they haven't saved. Delete SA.
      this.deleteInitiatedSiteAccess(item, sa);
    }

    // Pre-existing status exists, user has checked/unchecked.
    if (!item.checked && sa && !this._allPendingChanges.includes(sa)) {
      this._allPendingChanges.push(sa);
    }

    item.checked = !item.checked;
    this.onPendingChanges.emit(this._allPendingChanges);

    if (event.target.type !== 'checkbox'){
      // Stop the event from double-firing.
      return false;
    }
  }

  private initiateSiteAccess(item){
    const sa = new SiteAccess();
    sa.status = EnrollmentStatus.Initiated;
    item.siteAccess.push(sa);
    // Assign SA to the item depending on type of item (person or site)
    Site.isSiteGuard(item) ? sa.site = item : sa.person = item;
    this._allPendingChanges.push(sa);
  }

  private deleteInitiatedSiteAccess(item: Site | Person, sa: SiteAccess){
    // Remove from arrays
    item.siteAccess = item.siteAccess.filter(x => x !== sa);
    this._allPendingChanges = this._allPendingChanges.filter(x => x !== sa);
    sa = null;
  }

  private getSiteAccessForItem(item): SiteAccess {
    return item.siteAccess[0];
  }
}
