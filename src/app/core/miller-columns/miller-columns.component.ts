import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MillerItem, MillerColumnConfig, MillerColumn } from './miller-columns.interface';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';



/**
 *
 * TODO: NEED TO WORK ON MOBILE!
 * - look at angular animation?
 *
 * Compare:
 * https://github.com/dsharew/responsive-miller-column
 *
 * QUESTION: Should we explicitly configure CATEGORY and ITEM as separate?
 * Currently everything is an item, and we pass with relationships.
 * PRO: Ability to title each column/category
 *
 * Desired features:
 *  * Infinite columns.
 *  * MOBILE MOBILE MOBILE! Needs to work great on small screen.
 *  * Differing item/column content, e.g. checkbox, button, etc.
 *
 *
 *
 *  <prime-miller-columns
 *      [data]="millerColumnDummyData"
 *      [columnTitles]="['Collections', 'Sites', 'People'">
 *  </prime-miller-columns>
 *
 *  PROPOSED:---------
 * - Specify row/item class for each column. Makes it easy to swap out later.
 *
 *  // FIXME:Question - How do we associate each column with the data for it?
 *  // Could add `data` for each column section?
 *  <prime-miller-columns
 *      [columns]="[
 *        {
 *          title: "Collections",
 *          rowClass: "MillerItemSimple",
 *          data: MillerColumnDummyData['collections']
 *        },
 *        {
 *          title: "Sites",
 *          rowClass: "MillerItemSimpleInfo",
 *          data: MillerColumnDummyData['sites']
 *        },
 *        {
 *          title: "People",
 *          rowClass: "MillerItemMultiPerson",
 *          data: MillerColumnDummyData['people']
 *        }
 *    ]">
 *  </prime-miller-columns>
 *
 * Instead of setting "rowClass", could also set via attributes:
 * <prime-miller-columns [selectMultiple]="true"> //For checkbox v radio?
 */
const TIMING = "500ms";
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
      // TODO: Disabling the :leave animation for now as it was itnerfering with the :enter one.
      // transition('* => void', [
      //   animate(TIMING, keyframes([
      //     style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
      //     // style({opacity: 1, transform: 'translateX(5px)', offset: 0.5}),
      //     style({opacity: 1, transform: 'translateX(15px)', offset: 0.6}),
      //     style({opacity: 0, transform: 'translateX(-100%) translateZ(-500px)',  offset: 1.0})
      //   ]))
      // ])
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

  // TODO: Changing columnOrder should re-arrange data
  // @Input() columnTitles: string[];
  private columnOrder: string[]  = ['Collections', 'Sites', 'People'];

  // private _columns: MillerItem[][];
  //TODO: Make interface!
  // private _columns: any;
  private _columns:  MillerColumn[];;
  private MINIMUM_COLUMNS = 3;

  constructor() { }

  ngOnInit() {
    // Modify column ordering.
    if (this.config.options &&
        this.config.options.primaryColumn &&
        this.config.options.primaryColumn.toLowerCase() === "people"){
          this.columnOrder = ['People', 'Collections', 'Sites'];
    }

    // Setup first column
    this._columns = [
      {
        title: this.columnOrder[0],
        items: this.config.data[this.columnOrder[0].toLowerCase()],
        index: 0,
      }
    ]

    // Process if any columns are already "open"/pre-selected
    let i = 0;
    while (i < this._columns.length) {
      const column = this._columns[i];
      const open = column.items.filter(x => x.open);
      if (open.length) {
        // Adds to this._columns as necessary.
        // Safe to use [0] since there is only one open item per col (excluding the final column which we can safely ignore).
        this.openColumnFromItem(open[0])
      }
      i++;
    }
  }

  // get columns() : MillerItem[][] {
  get columns() : any {
    return this._columns;
  }


  filterColumn(phrase, colIndex){

    this._columns[colIndex]['items'] = this._columns[colIndex]['items']
    .map(x => {
      // Remove from search results without modifying array order.
      x.hidden = x.title.toLowerCase().indexOf(phrase.toLowerCase()) === -1;
      return x;
    })
  }


  onItemClick(item: MillerItem){
    if (item.open) return; //It's already open, don't re-create it.
    this.openColumnFromItem(item);
  }

  openColumnFromItem(item: MillerItem){
    let colIndex = this.findColumnFromItem(item);
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

  //TODO: Column interface + move fn location
  private closeColumn(column){
    this.closeColumnByIndex(column.index);
  }

  //TODO: Column interface + move fn location
  private closeColumnByIndex(index){
    this.cleanUpChildColumns(index);
    this._columns = [... this._columns.slice(0, index)]
  }


  /**
   * Creates (and destroys) columns as necessary based on item user has clicked.
   */
  private addColumnFromItem(item: MillerItem, colIndex: number){
    const newIndex = colIndex + 1;
    const newItems = this.findItemsAtColIndex(item, newIndex);

    if (newItems.length){ //Create column
      // TODO: Column Interface!
      const newCol: MillerColumn = {
        title: this.columnOrder[newIndex],
        items: newItems,
        index: newIndex,
      }
      this._columns = [... this._columns.slice(0, newIndex), newCol]
    }
    else {
      this.closeColumnByIndex(newIndex);
    }
  }


  // TODO:! Build breadcrumb like mobile for http://pebbleroad.github.io/taxonomy-browser/build/#
  buildBreadCrumb(column: MillerColumn){
    // let title = '';
    // for (let index = column.index; index < this._columns.length; index++) {
    //   const col = this._columns[index];
    //   console.log(`${column.title} -- ${col.title}`)
    //   title += col.title;
    // }
    // console.log(`${column.title} == ${title}\n`)

    // return `Breadcrumb - ${title}`;
    return column.title;
  }

  /**
   * Returns the column that the provided item belongs to (from this._columns)
   */
  //TODO: DOES THIS NEED TO BE REFACTORED OR JUST TOTALLY REMOVED?
  // Updated data format and this is out of date.
  private findColumnFromItem(item: MillerItem){
    let result;

    //Loop through all columns
    for (let colIndex = 0; colIndex < this._columns.length; colIndex++) {
      const column = this._columns[colIndex];
      // Loop through items in columns to find match
      for (let i = 0; i < column['items'].length; i++) {
        const colItem = column['items'][i];
        if (colItem.id === item.id){
          return colIndex;
        }
      }
    }

    return null;
  }

  private findItemsAtColIndex(item: MillerItem, targetColIndex: number): MillerItem[] {
    // Always show items without associationId. If associationId is present, then use that to determine if to show.
    return this.config.data[this.columnOrder[targetColIndex].toLowerCase()]
    .filter((x: MillerItem) => {
      if (!x.associationId) return true;
      return x.associationId === item.id;
    })
  }

  private cleanUpChildColumns(index){
      // De-select all cells in closed columns
      for (let i = index; i < this._columns.length; i++) {
        const column = this._columns[i];
        column['items'].map(x => x.open = false);
      }
  }
}
