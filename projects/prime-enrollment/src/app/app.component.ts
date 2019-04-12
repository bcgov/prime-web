import { Component } from '@angular/core';
import { PrimeSharedAppComponentBase } from '@prime-core/prime-shared/components/prime-app-component/app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends PrimeSharedAppComponentBase {
  title = 'prime-enrollment';
}
