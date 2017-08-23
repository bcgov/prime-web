import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit {

  public countries;

  constructor(private router: Router) {
    //todo
    //make an interface for the list type below, i.e. select2 lists
    this.countries = [
      {
        id: 'CAN',
        text: "Canada"
      },
      {
        id: "USA",
        text: "United States of America"
      }
    ]
   }

  ngOnInit() {
  }

  canContinue(): boolean {
    return true;
  }

  continue(): void {
    console.log('---------------\ncontinue');
    this.router.navigate(['self-declaration']);
  }

}
