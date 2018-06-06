import { Injectable } from '@angular/core';

@Injectable()
export class ApplicantDataService {


  getPageProgressSteps() {
    return [
      {
        title: "Contact",
        route: 'contact',
      },
      {
        title: "Professional",
        route: 'professional',
      },
      {
        title: "Self Declaration",
        route: 'self-declaration'
      }
    ]
  }
}
