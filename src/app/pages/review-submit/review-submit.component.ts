import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../core/base-component/base-component.component';

@Component({
  selector: 'app-review-submit',
  templateUrl: './review-submit.component.html',
  styleUrls: ['./review-submit.component.scss']
})
export class ReviewSubmitComponent extends BaseComponent implements OnInit {

  private hasValidToken: boolean = false;

  constructor(private router: Router) {
    super();
   }

  ngOnInit() {
  }

  canContinue(): boolean {
    return this.hasValidToken;
  }

  onValidToken(event): void {
    console.log(event);
    this.hasValidToken = true;
  }

  continue(): void {
    console.log('---------------\all done!');
  }

}
