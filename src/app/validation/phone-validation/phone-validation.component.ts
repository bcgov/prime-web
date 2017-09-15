import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ValidationComponent, staticImplements } from '../validation-component.interface'

@Component({
  selector: 'app-phone-validation',
  templateUrl: './phone-validation.component.html',
  styleUrls: ['./phone-validation.component.scss']
})
@staticImplements<ValidationComponent>()
export class PhoneValidationComponent {
  @Input() public fieldName: string;
  static PhoneNumberRegEx = "^[2-9]{1}\\d{2}[\\-]?\\d{3}[\\-]?\\d{4}$";

  public static validate(input: ElementRef): boolean {
    const phoneNumber = input.nativeElement.value
    if (phoneNumber == null || phoneNumber.length < 1) {
      return true;
    }

    const regex = new RegExp(this.PhoneNumberRegEx);
    return regex.test(phoneNumber);
  }
}
