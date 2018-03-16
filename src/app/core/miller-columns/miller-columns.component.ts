import { Component, OnInit, Input } from '@angular/core';
import { MillerItem } from './miller-columns.interface';


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
 * - columns only as labels
 * <prime-miller-columns [columns]="['Collections', 'Sites, 'People']">
 *
 * <prime-miller-columns [columns]="[
 *  {
 *    columnName: "Collections",
 *    columnId: "3",
 *    columnIndex: 0, //??? y/n? fix the depth a category will be? variations?
 *    items: []
 *  }
 * ]">
 *
 * <prime-miller-columns [columns]="primeM" >
 *
 *
 * <prime-miller-columns [itemClass]="MillerItemPersonComponent">
 * <prime-miller-columns [itemClass]="MillerItemRadioComponent">
 */
@Component({
  selector: 'prime-miller-columns',
  templateUrl: './miller-columns.component.html',
  styleUrls: ['./miller-columns.component.scss']
})
export class MillerColumnsComponent implements OnInit {
l
  @Input() data: MillerItem[];

  // private _columns: MillerItem[][];
  //TODO: Make interface!
  private _columns: any;
  private MINIMUM_COLUMNS = 3;

  constructor() { }

  ngOnInit() {
    // TODO: Should be improved so that we can set what columns are open to user. e.g. if user saves a page then refreshes.

    this._columns = [
      {
        title: "Base Column", //TODO: Set column title via inputs!
        items: this.data.filter(x => x.parentId === null),
        index: 0,
      }
    ]
  }

  onItemClick(item: MillerItem){
    // Close other items in the same column
    let colIndex = this.findColumnFromItem(item);
    this._columns[colIndex]['items'].filter(x => x !== item)
    .map(x => x.open = false);

    item.open = true;

    this.addColumnFromItem(item, colIndex);
  }

  // TODO: Column interface/type
  onClickColTitle(column){
    console.log('onClickColTitle,', column);
    this.closeColumn(column);
  }

  //TODO: Column interface + move fn location
  private closeColumn(column){
    // this._columns = this._columns.filter(x => x.index !== column.index)
    this._columns = [... this._columns.slice(0, column.index)]
  }

  /**
   * Creates (and destroys) columns as necessary based on item user has clicked.
   */
  private addColumnFromItem(item: MillerItem, colIndex: number){
    const newItems = this.findChildrenFromItem(item);
    const newIndex = colIndex + 1;
    if (newItems.length){
      const newCol = {
        // title: `Column ${colIndex + 1}`, //TODO: Set column title via input
        title: item.title,
        items: newItems,
        index: newIndex, //TODO: Test where index > 2
      }
      this._columns = [... this._columns.slice(0, newIndex), newCol]
    }
    else {
      this._columns = [... this._columns.slice(0, newIndex)]
    }
  }

  get columns() : MillerItem[][] {
    return this._columns;
  }

  // Used to display blank/empty columns to user before user input
  get blankColumns(): MillerItem[][] {
    let numOfBlanks = this.MINIMUM_COLUMNS - this._columns.length;
    if (numOfBlanks < 0) numOfBlanks = 0;
    return Array(numOfBlanks);
  }

  /**
   * Returns the column that the provided item belongs to (from this._columns)
   */
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

  private findChildrenFromItem(item: MillerItem): MillerItem[] {
    return this.data.filter(x => x.parentId === item.id);
  }

}

