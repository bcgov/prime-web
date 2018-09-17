import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prime-add-pharma-net-organization',
  templateUrl: './add-pharma-net-organization.component.html',
  styleUrls: ['./add-pharma-net-organization.component.scss']
})
export class AddPharmaNetOrganizationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openModal(event){
    console.log('TODO open modal');
  }

}
