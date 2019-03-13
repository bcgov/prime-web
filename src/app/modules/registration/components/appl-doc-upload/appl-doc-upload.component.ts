import { Component, OnInit, forwardRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { CommonImage } from 'moh-common-lib/images';
import { CacheService } from '../../../../services/cache.service';
import { DocumentType, Document } from '../../../../models/documents.interface';
import { ControlContainer, NgForm } from '@angular/forms';




@Component({
  selector: 'prime-appl-doc-upload',
  templateUrl: './appl-doc-upload.component.html',
  styleUrls: ['./appl-doc-upload.component.scss'],
  viewProviders: [ { provide: ControlContainer, useExisting: forwardRef(() => NgForm ) } ]
})
export class ApplDocUploadComponent implements OnInit {

  @Output() dataValid: EventEmitter<boolean> = new EventEmitter<boolean>();

  /** List of all possible document types */
  docTypesList: DocumentType[];
  /** List of currently selected document types */
  selectedDocType: DocumentType[] = [];
  /** String visible in the selectdropdown. Related to `dropdownValueAsDocumentType` */
  docTypeDropdownValue: string;

  documents: Document[];

  @ViewChild('docTypeEl') docTypeEl;

  public formRef: NgForm;

  constructor( private dataService: PrimeDataService,
               private cacheService: CacheService,
               public formRefC: ControlContainer ) {

    this.documents = this.dataService.documents; // this is basically an alias, since arrays are pass-by-reference,
    this.docTypesList = this.cacheService.DocumentTypes;
  }

  ngOnInit() {
    this.formRef = (this.formRefC as NgForm);

    // Listen for submission of form
    this.formRef.ngSubmit.subscribe( val => this.validateInfo( val ) );
  }

  private validateInfo( val: any ) {

    this.docTypeEl.control.setErrors(
      (this.documents.length === 0 ? {'mustSelect' : true } : null )
    );

    this.dataValid.emit( this.formRef.valid );
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

