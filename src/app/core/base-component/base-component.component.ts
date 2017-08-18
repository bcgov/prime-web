import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.scss']
})
export class BaseComponent implements OnInit {

  /**
   * TODO
   * - UUID / hash id setup in base component
   * - Make sure all possible classes are extending BaseComponent
   */


  // TODO - Switch over to properly using UUID! random() has collisions.
  // objectId:string = UUID.UUID().toString();
  objectId:string = Math.random().toString(36).substring(7);

  constructor() { }

  ngOnInit() {
  }

}
