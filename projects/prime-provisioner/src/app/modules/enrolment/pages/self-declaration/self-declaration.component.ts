import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prov-self-declaration',
  template: `
    <p>
      self-declaration works!
    </p>
  `,
  styleUrls: ['./self-declaration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelfDeclarationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
