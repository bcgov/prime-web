import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.scss']
})
export class BaseComponent implements OnInit {

  /**
   * An identifier for parents to keep track of components
   * @type {string}
   */
  objectId:string = UUID.UUID().toString();

  constructor() { }

  ngOnInit() {
  }

}
