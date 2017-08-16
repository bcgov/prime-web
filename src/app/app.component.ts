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
    //TODO - Put into LocalStorage service
  }

  ngOnInit(){
    // let modal = new ConsentModalComponent();
  }
}
