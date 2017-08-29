import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'prime-toggle',
  templateUrl: './prime-toggle.component.html',
  styleUrls: ['./prime-toggle.component.scss']
})
export class PrimeToggleComponent implements OnInit {

  @Input() data: boolean;
  @Output() dataChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

}
