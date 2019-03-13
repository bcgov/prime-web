import { Component, OnInit, forwardRef, ViewChild } from '@angular/core';
import { CommonImage } from 'moh-common-lib/images';
import { CacheService } from '@prime-core/services/cache.service';
import { DocumentType, Document } from '@prime-core/models/documents.interface';
import { ControlContainer, NgForm } from '@angular/forms';
import { RegistrationDataService } from '@prime-registration/services/registration-data.service';




@Component({
  selector: 'prime-appl-doc-upload',
  templateUrl: './appl-doc-upload.component.html',
  styleUrls: ['./appl-doc-upload.component.scss'],
  viewProviders: [ { provide: ControlContainer, useExisting: forwardRef(() => NgForm ) } ]
})
export class ApplDocUploadComponent implements OnInit {

  /** List of all possible document types */
  docTypesList: DocumentType[];
  /** List of currently selected document types */
  selectedDocType: DocumentType[] = [];
  /** String visible in the selectdropdown. Related to `dropdownValueAsDocumentType` */
  docTypeDropdownValue: string;

  documents: Document[];

  @ViewChild('docTypeEl') docTypeEl;

  public formRef: NgForm;

  constructor(private dataService: RegistrationDataService, private cacheService: CacheService, public formRefC: ControlContainer) {
    this.documents = this.dataService.documents; // this is basically an alias, since arrays are pass-by-reference,
    this.docTypesList = this.cacheService.DocumentTypes;

    this.formRef = (formRefC as NgForm);
  }

  ngOnInit() {
    this.docTypeEl.control.setErrors({'mustSelect': true});
  }

  /** Add a new section based on what's selected in the dropdown */
  add() {
    const selection: DocumentType = this.dropdownValueAsDocumentType;


    if (this.canAddDocumentType(selection)) {
      const document = new Document({
        type: selection,
        imageUUID: [], // ? - necessary?
        registrantUUID: this.registrant.objectId,
        images: []
      });

      // Add new documents to beginning so they appear at top to user
      this.documents.unshift(document);
    }

    this.updateValidation();
  }

  /** Updates the validity of the docTypeEl dropdown, and thus the form. */
  updateValidation() {
    // We need this function because it fixes a bug where the user would make a
    // selection in the dropdown (which satisfies angular validation), but then
    // the user could continue immediately without pressing 'Add'.  We don't
    // want the form valid unless the user has clicked 'Add' and has one doc.
    const valid = this.documents.length === 0 ? {'mustSelect' : true } : null;
    this.docTypeEl.control.setErrors(valid);
  }

  onImagesChange(doc: Document, img: CommonImage) {
    console.log('onImagesChanges', img);
  }

  /** Can only add unique document types */
  private canAddDocumentType(selection: DocumentType): boolean {
    return this.documents.filter(x => x.type === selection).length === 0;
  }

  addDisabled(): boolean {
    const cannotAdd = !this.canAddDocumentType(this.dropdownValueAsDocumentType);
    return this.docTypeDropdownValue === '' || cannotAdd;
  }

  remove(section: Document) {
    this.documents = this.documents.filter(x => {
      return x !== section;
    });
  }

  /** The current DocumentType that's selected in the dropdown. Related to `docTypeDropdownValue` */
  get dropdownValueAsDocumentType(): DocumentType {
    return this.docTypesList.find(x => x.name === this.docTypeDropdownValue);
  }

  get registrant() {
    return this.dataService.registrant;
  }


}

