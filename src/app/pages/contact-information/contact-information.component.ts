import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit {

  constructor(private router: Router) { }

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
