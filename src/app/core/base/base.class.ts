
import { UUID } from 'angular2-uuid';
export class Base {

  /**
   * An identifier for parents to keep track of components
   * @type {string}
   */
  public objectId: string = UUID.UUID().toString();

  /** A default dateFormat to be used in moment and other model formatters. */
  public dateFormat = 'MMM. dd, yyyy';

  constructor() { }

}
