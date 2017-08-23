import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-submit',
  templateUrl: './review-submit.component.html',
  styleUrls: ['./review-submit.component.scss']
})
export class ReviewSubmitComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  canContinue(): boolean {
    return true;
  }

  continue(): void {
    console.log('---------------\ncontinue');
    console.log('all done!');
    // this.router.navigate(['site-access']);
  }

}
