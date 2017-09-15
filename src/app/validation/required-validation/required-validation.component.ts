import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ValidationComponent, staticImplements } from '../validation-component.interface'

@Component({
  selector: 'required-validation',
  templateUrl: './required-validation.component.html',
  styleUrls: ['./required-validation.component.scss']
})
@staticImplements<ValidationComponent>()
export class RequiredValidationErrorsComponent implements OnInit {
  @Input() public fieldName: string = 'TODO!'; //should be overwritten at runtime, but write unit tests to check!

  constructor() { }

  ngOnInit() {
  }

  public static validate(el: ElementRef): boolean {
    return el.nativeElement.value.length > 0;
  }

}
