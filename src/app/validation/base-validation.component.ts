import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ValidationComponent, staticImplements } from './validation-component.interface';

/**
 * By default, will test the input's value against
 * inputRegex. If custom validation is needed just overwrite the function.
 *
 * Extended classes must have a template showing the validation error, e.g.
 *
 *  <div role="alert" aria-live="assertive">
 *    <div class="text-danger">{{fieldName} is required</div>
 *  </div>
 */
@staticImplements<ValidationComponent>()
export class BaseValidationComponent {
  @Input() public fieldName: string;
  static inputRegex: RegExp;

  public static validate(input: ElementRef): boolean {
    const inputVal = input.nativeElement.value
    if (inputVal == null || inputVal.length < 1) {
      return true;
    }

    const regex = new RegExp(this.inputRegex);
    return regex.test(inputVal);
  }
}
