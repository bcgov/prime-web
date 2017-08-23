import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-access',
  templateUrl: './site-access.component.html',
  styleUrls: ['./site-access.component.scss']
})
export class SiteAccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  canContinue(): boolean {
    return true;
  }

  continue(): void {
    console.log('---------------\ncontinue');
    this.router.navigate(['contact-info']);
  }

}
