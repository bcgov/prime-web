
import { UUID } from 'angular2-uuid';
export class BaseComponent  {

  /**
   * An identifier for parents to keep track of components
   * @type {string}
   */
  objectId: string = UUID.UUID().toString();

  constructor() { }

}
