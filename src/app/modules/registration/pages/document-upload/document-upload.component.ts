import { Component, OnInit } from '@angular/core';
import {PrimeDataService} from "../../../../services/prime-data.service";
import {Person} from "../../../../models/person.model";

@Component({
  selector: 'prime-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss']
})
export class DocumentUploadComponent implements OnInit {

  constructor(private primeDataService: PrimeDataService) { }

  ngOnInit() {
  }

  get registrant(): Person {
    return this.primeDataService.user;
  }

}
