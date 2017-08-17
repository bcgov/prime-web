import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ProgressBarItem } from './progress-bar.interface';


@Component({
  selector: 'prime-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  progressBarList: ProgressBarItem[] = [
    {displayName: 'Personal Information', routerLink: 'personal-info'},
    {displayName: 'Site Access', routerLink: 'site-access'},
    {displayName: 'Contact Information', routerLink: 'contact-info'},
    {displayName: 'Self Declaration', routerLink: 'self-declaration'},
    {displayName: 'User Acceptance', routerLink: 'user-acceptance'},
    {displayName: 'Review & Submit ', routerLink: 'review'},
  ]

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
