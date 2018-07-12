import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { cloneDeep } from 'lodash';
import { Collection } from '../../../../models/collections.model';
import { Person } from '../../../../models/person.model';
import { Site, SiteAccess, SiteAccessProgressSteps } from '../../../../models/sites.model';
import { MillerColumn, MillerColumnConfig, MillerItem } from './miller-columns.interface';
import { PrimeDataService } from '../../../../services/prime-data.service';

const TIMING = '500ms';
@Component({
  selector: 'prime-miller-columns',
  templateUrl: './miller-columns.component.html',
  styleUrls: ['./miller-columns.component.scss'],
  // Necessary so styles also apply to Miller-Item-Checkbox
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('loadInOut', [
      transition('void => *', [
        animate(TIMING, keyframes([
          style({opacity: 0, transform: 'translateX(-100%) translateZ(-500px)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
    ]),
    // Alternate "flip" animation that matches Farzad's designs more.
    trigger('flipInOut', [
      transition('void => *', [
        animate(TIMING, keyframes([
          style({opacity: 0, transform: 'rotateX(-90deg)', offset: 0}),
          style({opacity: 1, transform: 'rotateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(TIMING, keyframes([
          style({opacity: 1, transform: 'rotateX(0)',     offset: 0}),
          style({opacity: 0, transform: 'rotateX(-90deg)',  offset: 1.0})
        ]))
      ])
    ])
  ]
})
export class MillerColumnsComponent implements OnInit {

  @Input() config: MillerColumnConfig;
  private columnOrder: string[]  = ['Collections', 'Sites', 'People'];
  private _columns:  MillerColumn[];
  private _originalColumnSnapshot:  MillerColumn[];
  public changesMade: boolean = false;
  public declarationCheck: boolean = false;
  public saveSuccess: boolean = false;
  public pendingSiteAccess: SiteAccess[];
  public showLoadingSpinner: boolean = false;

  constructor(private router: Router, private dataService: PrimeDataService) { }

  ngOnInit() {
    if (!this.config) {return; }
    // Modify column ordering based on config
      if (this.config.options &&
       this.config.options.primaryColumn &&
        this.config.options.primaryColumn.toLowerCase() === 'people'){
          this.columnOrder = ['People', 'Collections', 'Sites'];
    }

    // Setup first column
    this._columns = [
      {
        title: this.columnOrder[0],
        items: this.config.data[this.columnOrder[0].toLowerCase()],
        index: 0,
      }
    ];


    // Check if there's a pre-selected id in the config
    if (this.config.options && this.config.options.preselectObjectId){
      const preselectObjectId = this.config.options.preselectObjectId;
      // Selected item will be in first column, regardless of primaryColumn
      const preselectItem = this._columns[0].items
        .find(item => item.objectId === preselectObjectId);

      if (!preselectItem) {
        console.error('MillerColumnsComponent config.options.preselectObjectId refers to an object which does not exist! Removed objectId from url.');
        this.router.navigate(['/verifier/enrollment/']);
        return;
      }

      this.openColumnFromItem(preselectItem);
      // Open second column too. Currently just opens the top item, no advanced logic. Potentially could open an item it does not have SA's with, but should be rare.
      this.openColumnFromItem(this._columns[1].items[0]);
    }

    // Save the original columns so we can restore it if the user wants to cancel changes
    this._originalColumnSnapshot = cloneDeep(this._columns);
  }


  // get columns() : MillerItem[][] {
  get columns(): any {
    return this._columns;
  }

  public get IS_PEOPLE_TABLE(): boolean {
   return !!(this.config.options &&
      this.config.options.primaryColumn &&
      this.config.options.primaryColumn.toLowerCase() === 'people');
  }


  filterColumn(phrase, colIndex){
    this._columns[colIndex]['items'] = this._columns[colIndex]['items']
    .map(x => {
      // Remove from search results without modifying array order.
      x.hidden = x.name.toLowerCase().indexOf(phrase.toLowerCase()) === -1;
      return x;
    });
  }


  onItemClick(item: MillerItem){
    if (item.open) { return; } //It's already open, don't re-create it.
    this.openColumnFromItem(item);
  }

  openColumnFromItem(item: MillerItem){
    const colIndex = this.findColumnIndexFromItem(item);
    // Close other items in the same column
    this._columns[colIndex]['items'].filter(x => x !== item)
    .map(x => x.open = false);
    // Close open items in child columns
    this.cleanUpChildColumns(colIndex);
    // Open the selection
    item.open = true;
    this.addColumnFromItem(item, colIndex);
  }

  // TODO: Column interface/type
  onClickColTitle(column){
    this.closeColumn(column);
  }

  onCheck(pending: SiteAccess[]){
    this.saveSuccess = false;
    this.changesMade = pending.length >= 1;
    this.pendingSiteAccess = pending;
    console.log('onCheck', pending);
  }

  //TODO: Column interface + move fn location
  private closeColumn(column){
    this.closeColumnByIndex(column.index);
  }

  //TODO: Column interface + move fn location
  private closeColumnByIndex(index){
    this.cleanUpChildColumns(index);
    this._columns = [... this._columns.slice(0, index)];
  }


  /**
   * Creates (and destroys) columns as necessary based on item user has clicked.
   */
  private addColumnFromItem(item: MillerItem, colIndex: number){
    const newIndex = colIndex + 1;
    const newItems = this.findItemsAtColIndex(item, newIndex);

    if (newItems.length){ //Create column
      const newCol: MillerColumn = {
        title: this.columnOrder[newIndex],
        items: newItems,
        index: newIndex,
      };
      this._columns = [... this._columns.slice(0, newIndex), newCol];
    }
    else {
      this.closeColumnByIndex(newIndex);
    }
  }

  /** Saves the data and updates the UI */
  public save(): void {

    this.showLoadingSpinner = true;

    // The user is no longer 'New' once they've had enrollments saved.
    if (this.shouldPreCheckAllBoxes()){
      const user = this.getUserSelection();
      user.isNewUser = false;
    }

    this.saveData();

    this.changesMade = false;
    setTimeout(() => {
      this.showLoadingSpinner = false;
      this.saveSuccess = true;
    }, 3000);
  }

  /** Cancels the users changes and reverts back to previous state, including what columns are open.  */
  public cancel(): void {
    this._columns = cloneDeep(this._originalColumnSnapshot);
    this.changesMade = false;
  }

  public backLink(): string {
    const linkType = this.IS_PEOPLE_TABLE ? 'user' : 'site';
    return `/verifier/dashboard/${linkType}`;
  }

  /** Handles data operations necessary to save, does not handle UI per se, but statuses will update due to changes in underlying data. */
  private saveData(){
    this.pendingSiteAccess.map(siteAccess =>  {
      //Go from our copy to the original in dataService
      const orig = this.dataService.findSiteAccessByObjectId(siteAccess.objectId);

      // Value exists, so we need to update it
      if (orig){
        orig.status = siteAccess.status;
        orig.endDate = siteAccess.endDate;
        orig.startDate = siteAccess.startDate;
        orig.declinedReason = siteAccess.declinedReason;
        orig.progress = SiteAccessProgressSteps.Applicant;
        console.log('Updating existing SiteAccess', siteAccess);
      }
      else {
        // SiteAccess doesn't exist, so it's a brand new one. We just need to insert it.
        let origPerson, origSite;
        if (this.IS_PEOPLE_TABLE) {
          const objectId = this.getUserSelection().objectId;
          origPerson = this.dataService.findPersonByObjectId(objectId);
          origSite = this.dataService.findSiteByObjectId(siteAccess.site.objectId);
        }
        else {
          const objectId = this.getSiteSelection().objectId;
          origSite = this.dataService.findSiteByObjectId(objectId);
          origPerson = this.dataService.findPersonByObjectId(siteAccess.person.objectId);
        }

        siteAccess.progress = SiteAccessProgressSteps.Applicant;
        siteAccess.person = origPerson;
        siteAccess.site = origSite;
        origSite.siteAccess.push(siteAccess);
        origPerson.siteAccess.push(siteAccess);

        this.dataService.siteAccesses.push(siteAccess);
        console.log('Saving new SiteAccess', siteAccess);
      }
    });

    this.pendingSiteAccess = this.pendingSiteAccess.map(siteAccess => {
      siteAccess.pendingChanges = false;
      return siteAccess;
    });

    this._originalColumnSnapshot = cloneDeep(this._columns);
  }

  /**
   * Returns the column that the provided item belongs to (from this._columns)
   */
  private findColumnIndexFromItem(item: MillerItem): number{
    for (let colIndex = 0; colIndex < this._columns.length; colIndex++) {
      const column = this._columns[colIndex];
      // Loop through items in columns to find match
      for (let i = 0; i < column['items'].length; i++) {
        const colItem = column['items'][i];
        if (colItem === item){
          return colIndex;
        }
      }
    }

    return null;
  }

  private findItemsAtColIndex(item: MillerItem, targetColIndex: number): MillerItem[] {
    // First, filter out data that doesn't apply to get our column data
    let data = this.config.data[this.columnOrder[targetColIndex].toLowerCase()]
    .filter((x: any) => {
      if (!x.associationId) return true;
      return x.associationId.indexOf(item.objectId) !== -1;
    });

    // Second, update new column attributes on selections in previous columns
    data = this.recalculateColumnStatus(data, item);
    return data;
  }


  isSiteColumn(col: Site[] | Collection[] | Person[] | MillerItem[] | any[]): col is Site[] {
    return (<Site[]>col)[0]._isSite !== undefined;
  }

  isPeopleColumn(col: Site[] | Collection[] | Person[] | MillerItem[] ): col is Person[]{
    return (<Person[]>col)[0].firstName !== undefined;
  }

  /** Calculates column statuses based on selections in previous columns. INCOMPLETE! Does not handle enrollment/site page. .*/
  private recalculateColumnStatus(column: any[], originalSelection: MillerItem ): MillerItem[] {
    // Clone the column so that when we filter out irrelevant data it doesn't destroy the underlying data.
    column = cloneDeep(column);

    // Special filtering operations for last column for 2 table types
    if (this.IS_PEOPLE_TABLE && this.isSiteColumn(column)) { // Last column
      const selection = this.getUserSelection();
      column = column.map(site => {
        site.siteAccess = site.siteAccess.filter(sa => {
          // Since we clone, we have to check on ID not pure identity
          return sa.person.objectId === selection.objectId;
        });
        return site;
      });

      // Now that we've filtered out irrelevant SA's, we can easily check items
      // that have Active SAs.

      if (this.shouldPreCheckAllBoxes()){
        console.log('Should precheck all items!');
        const preChecked = column.map(item => item.checked = true);
        if (preChecked.length) this.changesMade = true;
      }
      else {
        column
          .filter(item => item.siteAccess.length)
          .filter(item => item.siteAccess[0].status === 'Active' || item.siteAccess[0].status === 'New' || item.siteAccess[0].status === 'Initiated')
          .map(item => item.checked = true);
      }


    }
    else if (!this.IS_PEOPLE_TABLE && this.isPeopleColumn(column)) {
      const selection = this.getSiteSelection();

      column = column.map(person => {
        person.siteAccess = person.siteAccess.filter(sa => {
          return sa.site.objectId === selection.objectId;
        });
        return person;
      });

      column
        .filter(item => item.siteAccess.length)
        .filter(item => item.siteAccess[0].status === 'Active' || item.siteAccess[0].status === 'New' || item.siteAccess[0].status === 'Initiated')
        .map(item => item.checked = true);
    }

    // Sort so all checked items are at the top
    column.sort((a, b) => {
      if (a.checked || b.checked){
        return b.checked ? 1 : 0;
      }
      else {
        // Sort remainder alphabetically
        return a.name > b.name ? 1 : 0;
      }
    });

    // Add "Active" badge
    return column;
  }

  // private calculateFinalColumn(column){

  // }

  public getUserSelection(): Person{
    if (this.IS_PEOPLE_TABLE){
      return this._columns[0].items.filter(x => x.open)[0];
    }
    return null;
  }

  public getSiteSelection(): Site{
    if (!this.IS_PEOPLE_TABLE){
      return this._columns[1].items.filter(x => open)[0];
    }
    return null;
  }

  public getSelection(): Person | Site {
    if (this.IS_PEOPLE_TABLE){
      return this.getUserSelection();
    }
    else {
      return this.getSiteSelection();
    }
  }

  /** Returns all the SiteAccesses of the selected item in the primary (left
   * most) column. These are already existing site accesses, not new ones we
   * will have to save, etc. */
  public getSelectedSiteAccess(){

    if (this.IS_PEOPLE_TABLE){ // items are Sites
      return (this._columns[0].items.filter(x => x.open)[0] as any).siteAccess;
    }
    else { // items are Collections
      return (this._columns[0].items.filter(x => x.open)[0] as any).allSiteAccess;
    }

  }

  public shouldPreCheckAllBoxes(): boolean {
    const user = this.getUserSelection();
    return user && user.isNewUser;
  }

  private cleanUpChildColumns(index){
      // De-select all cells in closed columns
      for (let i = index; i < this._columns.length; i++) {
        const column = this._columns[i];
        column['items'].map(x => x.open = false);
      }
  }
}
