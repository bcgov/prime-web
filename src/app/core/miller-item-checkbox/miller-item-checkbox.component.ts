import { Component, OnInit, Input } from '@angular/core';
import { Base } from '../base/base.class';

@Component({
  selector: 'prime-miller-item-checkbox',
  templateUrl: './miller-item-checkbox.component.html',
  styleUrls: ['./miller-item-checkbox.component.scss']
})
export class MillerItemCheckboxComponent extends Base implements OnInit {

  //TODO: Add interface for miller items
  @Input() items: any[];

  constructor() {
    super();
   }

  ngOnInit() {
  }

  onItemClick(item){
    item.checked = !item.checked;
    // Stop the default click event on the label and the event double-firing.
    return false;
  }

}
