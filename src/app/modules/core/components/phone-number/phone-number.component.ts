import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Base } from '../../../../core/base/base.class';

const NUMBER = /\d/;

@Component({
  selector: 'prime-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneNumberComponent extends Base implements OnInit {
  @Input() value: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() fullWidth: boolean = false;
  @Input() disabled: boolean;

  public phoneMask = {
    mask: ['(', NUMBER, NUMBER, NUMBER, ')', '-', NUMBER, NUMBER, NUMBER, '-', NUMBER, NUMBER, NUMBER, NUMBER]
  };

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
