import { Component } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ConsentModalComponent } from './core/consent-modal/consent-modal.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  constructor(){

    //ARC TODO - Refactor and move this into a better section?
    //Set app-wide configuration for select2.
    (<any>$.fn.select2).defaults.set( "theme", "bootstrap" );
    //Make selections be in the order the user selected them (by default they re-order to match input)
    // $("select").on("select2:select", function (evt: any) {
    // $("body").on("select2:select", 'select', function (evt: any) {
    //   var element = evt.params.data.element;
    //   var $element = $(element);

    //   $element.detach();
    //   $(this).append($element);
    //   $(this).trigger("change");
    // });
  }
}
