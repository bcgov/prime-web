import { Injectable } from '@angular/core';

@Injectable()
export class ApplicantDataService {


  getPageProgressSteps() {
    return [
      {
        title: "Contact",
        isActive: true,
      },
      {
        title: "Professional",
        isActive: false,
      },
      {
        title: "Self Declaration",
        isActive: false,
      }
    ]
  }
}
