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
  }

  ngOnDestroy(){
    [].concat(... this.items.map(site => site.siteAccess))
    .map(sa => sa.pendingChanges = false);
  }

  onItemClick(event, item) {
    const sa = this.getSiteAccessForItem(item);

    if (sa) {
      sa.pendingChanges = true;
    }


    // if (sa && sa.status === EnrollmentStatus.Active){
    //   sa.pendingChanges = item.checked;
    // }

    if (typeof sa === 'undefined') {
      // User has selected a blank item, creating new SA.
      console.log('onItemClick1', {item, sa})
      this.initiateSiteAccess(item);
    }

    if (item.checked && this._allPendingChanges.includes(sa)) {
      // User is undoing a change they haven't saved. Delete SA.
      console.log('onItemClick2', {item, sa})
      this.deleteInitiatedSiteAccess(item, sa);
      sa.pendingChanges = false;
    }

    if (item.checked && sa && (sa.status === EnrollmentStatus.Active || sa.status === EnrollmentStatus.New)){
      console.log('onItemClick4-NEW, unchecking active/new', {item, sa})
      this.removeExistingEnrollment(item, sa);
    }

    if (!item.checked && sa && sa.status === null){
      console.log('onItemClick5-NEW, undoing, restoring active', {item, sa})
      this.undoRemoveExistingEnrollment(item, sa);
    }

    console.log('onItemClick-END', {item, sa})
    item.checked = !item.checked;
    this.onPendingChanges.emit(this._allPendingChanges);

    if (event.target.type !== 'checkbox'){
      // Stop the event from double-firing.
      return false;
    }
  }

  showNewEnrollment(item){
    const sa = this.getSiteAccessForItem(item);
    if (item.checked && sa) {
      return sa.pendingChanges && sa.status === EnrollmentStatus.Initiated;
    }

    return false;
  }

  showEndEnrollment(item){
    const sa = this.getSiteAccessForItem(item);
    if (!item.checked && sa) {
      return sa.pendingChanges && sa.status !== EnrollmentStatus.Initiated;
    }

    return false;
  }

  private removeExistingEnrollment(item, sa: SiteAccess){
    sa.status = null;
    sa.declinedReason = 'noLongerEmployee';
    sa.pendingChanges = true;
    this._allPendingChanges.push(sa);
  }

  private undoRemoveExistingEnrollment(item, sa: SiteAccess){
    sa.pendingChanges = false;
    if (sa.status === null) {
      sa.status = EnrollmentStatus.Active;
    }
    this._allPendingChanges = this._allPendingChanges.filter(x => x !== sa);
  }

  private initiateSiteAccess(item){
    const sa = new SiteAccess();
    sa.pendingChanges = true;
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
