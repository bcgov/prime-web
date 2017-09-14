import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'required-validation-errors',
  templateUrl: './required-validation-errors.component.html',
  styleUrls: ['./required-validation-errors.component.scss']
})
export class RequiredValidationErrorsComponent implements OnInit {
  @Input() public fieldName: string = 'TODO!';

  constructor() { }

  ngOnInit() {
  }

  public static validate(el: ElementRef): boolean {
    console.log('VALIDATE called!', el.nativeElement.value)
    return el.nativeElement.value.length > 0;
  }

}
