import { Component } from '@angular/core';
import { PrimeSharedAppComponentBase } from '@prime-core/prime-shared/components/prime-app-component/app.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends PrimeSharedAppComponentBase {
  title = 'prime-enrollment';

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {
    super(router, activatedRoute, titleService);
  }

}
