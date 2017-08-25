import { Component } from '@angular/core';
import { ConsentModalComponent } from './core/consent-modal/consent-modal.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prime – Applicant Enrollment';
  constructor(){
    //Set app-wide configuration for select2.
    (<any>$.fn.select2).defaults.set( "theme", "bootstrap" );
  }
}
