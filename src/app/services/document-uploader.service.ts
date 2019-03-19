import { Injectable } from '@angular/core';
import { AbstractHttpService } from 'moh-common-lib/services';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CommonImage } from 'moh-common-lib/images';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class DocumentUploaderService extends AbstractHttpService {
  // private URL = '/file/rest'

  constructor(protected http: HttpClient) {
    super(http);
  }

  protected _headers: HttpHeaders;

  uploadImage(image: CommonImage) {
    const eventUUID = UUID.UUID();
    const URL = `/file/event/${eventUUID}/document/${image.uuid}`;
    this._headers = new HttpHeaders({
      programArea: 'reg',
      'Document-Type': 'TEST_DOCUMENT',
      imageSize: `${image.size}`,
      'Content-Type': 'image/jpeg',
    });

    // TODO - URL
    console.log('Uploading image with headers', {headers: this._headers, URL, image});

    return this.post(URL, image.fileContent);
  }

  handleError(error: HttpErrorResponse){
    console.log('DocumentUploader ERROR', error);
  }
}
