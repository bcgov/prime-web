import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.scss']
})
export class BaseComponent implements OnInit {

  constructor() { }

  /**
   * TODO
   * - UUID / hash id setup in base component
   * - Make sure all possible classes are extending BaseComponent
   */

  ngOnInit() {
  }

}
