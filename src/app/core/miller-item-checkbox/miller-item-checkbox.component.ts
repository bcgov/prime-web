import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base-component/base-component.component';

@Component({
  selector: 'prime-miller-item-checkbox',
  templateUrl: './miller-item-checkbox.component.html',
  styleUrls: ['./miller-item-checkbox.component.scss']
})
export class MillerItemCheckboxComponent extends BaseComponent implements OnInit {

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
