import { Component, OnInit, forwardRef } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { CommonImage } from 'moh-common-lib//images';
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

  /** List of all possible document types */
  docTypesList: DocumentType[];
  /** List of currently selected document types */
  selectedDocType: DocumentType[] = [];
  /** String visible in the selectdropdown. Related to `dropdownValueAsDocumentType` */
  docTypeDropdownValue: string = ''; // the default non-choice

  // TODO - Need to store these on dataService, and one PER doc type! And then get the UUIds back on reg.
  documents: Document[];

  images: CommonImage[] = [];

  constructor(private dataService: PrimeDataService, private cacheService: CacheService) {
    this.documents = this.dataService.documents; // this is basically an alias, since arrays are pass-by-reference,
    this.docTypesList = this.cacheService.DocumentTypes;
  }

  ngOnInit() {
  }

  /** Add a new section based on what's selected in the dropdown */
  add() {
    const selection: DocumentType = this.dropdownValueAsDocumentType;


    if (this.canAddDocumentType(selection)) {
      // TODO - Maybe store Documents on DataService?
      // TODO - And on the Registrant, just store a "documentsUUID: string[]"

      // TODO - Need to store images in DataService and populate imageUUID here.

      // TODO - halfway through having images stored in this Document object which is going to be MOVED
      const document = new Document({
        type: selection,
        imageUUID: [], // ? - necessary?
        registrantUUID: this.registrant.objectId, // TODO !!!
        images: []
      });

      // TODO - MOVE THIS SO IT'S JUST DATASERVICE
      // Add new documents to beginning so they appear at top to user
      this.documents.unshift(document);
    }

  }

  /** Can only add unique document types */
  private canAddDocumentType(selection: DocumentType): boolean {
    return this.registrant.documents.filter(x => x.type === selection).length === 0;
  }

  addDisabled(): boolean {
    const cannotAdd = !this.canAddDocumentType(this.dropdownValueAsDocumentType);
    return this.docTypeDropdownValue === '' || cannotAdd;
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

  get registrant() {
    return this.dataService.registrant;
  }


}

