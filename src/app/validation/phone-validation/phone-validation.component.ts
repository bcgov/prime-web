import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ValidationComponent, staticImplements } from '../validation-component.interface'

@Component({
  selector: 'app-phone-validation',
  templateUrl: './phone-validation.component.html',
  styleUrls: ['./phone-validation.component.scss']
})
@staticImplements<ValidationComponent>()
export class PhoneValidationComponent implements OnInit {
  @Input() public fieldName: string;
  static PhoneNumberRegEx = "^[2-9]{1}\\d{2}[\\-]?\\d{3}[\\-]?\\d{4}$";



  constructor() { }

  ngOnInit() {
  }

  public static validate(input: ElementRef): boolean {
    console.log('phone validate called');
    return true;
  }



}
