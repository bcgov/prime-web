import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { countryList, provinceList } from '../../data/country';
const country = countryList;
const province = provinceList;
@Component({
  selector: 'enroll-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(public enrollStateSvc: EnrollmentStateService) {}
  countries = country;
  provinces = province;

  ngOnInit() {}
}
