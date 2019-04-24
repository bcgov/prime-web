import { SimpleDate } from 'moh-common-lib';
import { CommonImage } from 'moh-common-lib/images/images';

export interface DocumentType {
    docType: string;
    description: string;
}


export class Document {
    type: DocumentType;
    registrantUUID: string;
    expiry?: SimpleDate;
    images: CommonImage[];

    constructor(input) {
        this.type = input.type;
        this.registrantUUID = input.registrantUUID;
        this.expiry = input.expiry;
        this.images  = [];
    }

    isValid(): boolean {
        return this.expiry && this.images.length >= 1;
    }
}

