import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-acceptance',
  templateUrl: './user-acceptance.component.html',
  styleUrls: ['./user-acceptance.component.scss']
})
export class UserAcceptanceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  canContinue(): boolean {
    return true;
  }

  print(): void {
    alert('todo');
  }

  continue(): void {
    console.log('---------------\ncontinue');
    this.router.navigate(['review-submit']);
  }

}
