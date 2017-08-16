import { Component, OnInit } from '@angular/core';
import { ProgressBarItem } from './progress-bar.interface';


@Component({
  selector: 'prime-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  progressBarList: ProgressBarItem[] = [
    {displayName: 'Personal Information', routerLink: ''},
    {displayName: 'Site Access', routerLink: ''},
    {displayName: 'Contact Information', routerLink: ''},
    {displayName: 'Self Declaration', routerLink: ''},
    {displayName: 'User Acceptance', routerLink: ''},
    {displayName: 'Review & Submit ', routerLink: ''},
  ]

  constructor() { }

  ngOnInit() {
  }

}
