import { Component, OnInit ,ViewChild} from '@angular/core';
import {PrimeDataService} from "../../../../services/prime-data.service";
import {Person} from "../../../../models/person.model";
import {MspImage} from "../../../../models/msp-image";
import {UUID} from 'angular2-uuid';
import {FileUploaderComponent} from '../../../../core/file-uploader/file-uploader.component'
@Component({
  selector: 'prime-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss']
})
export class DocumentUploadComponent implements OnInit {

  @ViewChild('fileUploader') fileUploader: FileUploaderComponent;

  constructor(private primeDataService: PrimeDataService) { }

  ngOnInit() {
  }

  get registrant(): Person {
    return this.primeDataService.user;
  }
  addDocument(evt:MspImage){
    console.log('------addDocument-----');
    this.primeDataService.user.images =   this.primeDataService.user.images.concat(evt);
    this.fileUploader.forceRender();
  }
}


