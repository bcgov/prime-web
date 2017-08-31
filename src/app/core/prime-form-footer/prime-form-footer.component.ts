import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { BaseComponent } from '../base-component/base-component.component';
@Component({
  selector: 'prime-form-footer',
  templateUrl: './prime-form-footer.component.html',
  styleUrls: ['./prime-form-footer.component.scss']
})
export class PrimeFormFooterComponent extends BaseComponent implements OnInit {
  @Input() locked: boolean;
  @Input() disableBack: boolean;
  @Output() onContinue: EventEmitter<void> = new EventEmitter<void>();
  @Output() onBack: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    super();
  }

  ngOnInit() {
  }

  continue(){
    this.onContinue.emit();
  }

  back(){
    this.onBack.emit();
  }

}
