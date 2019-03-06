import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Base } from 'moh-common-lib/models';


/**
 * TODO: Determine whether this component should be in the moh-common-lib
 */

@Component({
  selector: 'prime-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
  /* Re-use the same ngForm that it's parent is using. The component will show
   * up in its parents `this.form`, and will auto-update `this.form.valid`
   */
  viewProviders: [ { provide: ControlContainer, useExisting: forwardRef(() => NgForm ) } ]
})
export class NameComponent extends Base implements OnInit {

  @Input() disabled: boolean = false;
  @Input() required: boolean = true;
  @Input() nameStr: string;
  @Input() label: string = 'Name';
  @Input() maxLen: string = '255';

  @Output() nameStrChange: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Valid characters for name
   */
  public nameCriteria: RegExp = RegExp( '^[a-zA-Z][a-zA-Z\-.\' ]*$' );

  constructor() {
    super();
   }

  ngOnInit() {
  }

  /**
   * Passes the value entered back to the calling component
   * @param name value the was entered by
   */
  setName( value: string ) {
    this.nameStrChange.emit( value );
  }
}
