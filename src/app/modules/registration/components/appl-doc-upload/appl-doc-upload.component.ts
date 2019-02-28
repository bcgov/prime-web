import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';


interface DocumentType {
  name: string;
  tips: string;
  /** For application to track if the section has been completed and a green check should be displayed */
  completed?: boolean;
}

// TODO - This will be replaced via JSON payload from backend in the future.
const DocumentTypes: DocumentType[] = [
  {
    name: 'Driver\'s License',
    tips: 'Scan the document or take a photo of it.  Make sure that it\'s: <br/>-test'
  },
  {
    name: 'Passport',
    tips: 'passport tips etc etc etc',
    completed: true, // TODO - Remove
  }
];


@Component({
  selector: 'prime-appl-doc-upload',
  templateUrl: './appl-doc-upload.component.html',
  styleUrls: ['./appl-doc-upload.component.scss'],
 /* Re-use the same ngForm that it's parent is using. The component will show
   * up in its parents `this.form`, and will auto-update `this.form.valid`
   */
  viewProviders: [ { provide: ControlContainer,  useExisting: forwardRef(() => NgForm ) } ]
})
export class ApplDocUploadComponent implements OnInit {

  /** List of all possible document types */
  docTypesList: DocumentType[] = DocumentTypes;
  /** List of currently selected document types */
  selectedDocType: DocumentType[] = [];
  /** String visible in the selectdropdown. Related to `dropdownValueAsDocumentType` */
  docTypeDropdownValue: string = 'null'; // the default non-choice

  // TODO: Store on model
  tempImages = [];

  // TODO - Add 'onDeleteImage' and any others that may be required.
  onAddImage(image){
    console.log('add image', image);
    this.tempImages.push(image);
  }

  constructor() { }

  ngOnInit() {
  }

  /** Add a new section based on what's selected in the dropdown */
  add() {
    const selection: DocumentType = this.dropdownValueAsDocumentType;
    // Only add if unique
    if (!this.selectedDocType.includes(selection)) {
      this.selectedDocType.unshift(selection);
    }
  }

  addDisabled(): boolean {
    // disable on duplicates
    const isDuplicate = this.selectedDocType.includes(this.dropdownValueAsDocumentType);
    return this.docTypeDropdownValue === 'null' || isDuplicate;
  }

  remove(section: DocumentType) {
    this.selectedDocType = this.selectedDocType.filter(x => {
      return x.name !== section.name;
    });
  }

  /** The current DocumentType that's selected in the dropdown. Related to `docTypeDropdownValue` */
  get dropdownValueAsDocumentType(): DocumentType {
    return this.docTypesList.find(x => x.name === this.docTypeDropdownValue);
  }


}

