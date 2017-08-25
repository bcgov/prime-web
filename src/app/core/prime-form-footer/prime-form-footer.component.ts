import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'prime-form-footer',
  templateUrl: './prime-form-footer.component.html',
  styleUrls: ['./prime-form-footer.component.scss']
})
export class PrimeFormFooterComponent implements OnInit {
  @Input() locked: boolean;
  @Output() onContinue: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  continue(){
    this.onContinue.emit();
  }

}
