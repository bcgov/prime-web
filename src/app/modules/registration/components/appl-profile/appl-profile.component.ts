import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prime-appl-profile',
  templateUrl: './appl-profile.component.html',
  styleUrls: ['./appl-profile.component.scss']
})
export class ApplProfileComponent implements OnInit {

  @Input() editIdentityInfo: boolean = true;

  constructor() { }

  ngOnInit() {
  }
}
