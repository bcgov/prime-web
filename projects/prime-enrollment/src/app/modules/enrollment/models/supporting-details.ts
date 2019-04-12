import { ISupportingDetails } from '../../../core/interfaces';
import { FormControl } from '@angular/forms';

export class SupportingDetails implements ISupportingDetails {
  private _details: string | FormControl;
  private _documents: FormControl | Document[];
  get documents() {
    return this._documents;
  }
  set documents(docs: Document[] | FormControl) {
    this._documents = docs;
  }

  get details() {
    return this._details;
  }

  set details(details: string | FormControl) {
    this._details = details;
  }

  constructor(details: string = '', documents: Document[] = []) {
    this.details = details;
    this.documents = documents;
  }

  clearValues() {
    this.details = null;
    this.documents = null;
  }
}
