import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'prime-header',
  templateUrl: './prime-header.component.html',
  styleUrls: ['./prime-header.component.scss']
})
export class PrimeHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routeIsActive(url: string): boolean {
    return this.router.url.includes(url);
  }
}
