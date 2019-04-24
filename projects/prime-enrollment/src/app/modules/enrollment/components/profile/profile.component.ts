import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { CacheService } from 'prime-core';

@Component({
  selector: 'enroll-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // TODO - replace CacheService with EnrolmentCacheService when created.
  constructor(public enrollStateSvc: EnrollmentStateService, private cacheService: CacheService) {
  }

  countries = this.cacheService.$countryList;
  provinces = this.cacheService.$provinceList;

  ngOnInit() {}

  continue() {}
}
