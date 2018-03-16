import { Component, OnInit, Input } from '@angular/core';
import { MillerItem } from './miller-columns.interface';

@Component({
  selector: 'prime-miller-columns',
  templateUrl: './miller-columns.component.html',
  styleUrls: ['./miller-columns.component.scss']
})
export class MillerColumnsComponent implements OnInit {

  @Input() data: MillerItem[];

  constructor() { }

  ngOnInit() {
  }

  onItemClick(event, item: MillerItem){
    console.log('onItemClick', event, item);
    //TODO: Deselect siblings.
    // Need to be able to identify siblings.
    //FIXME: This just de-selects base-level! Should ONLY be siblings!
    this.data.filter(x => x !== item)
    .map(x => x.open = false);
    item.open = true;

    // item.title = "Clicked!";
  }



  //TODO: Need to be able to get top-level items only
  //get topLevelItems()
  //get childrenForDepth()??? nah...

}

