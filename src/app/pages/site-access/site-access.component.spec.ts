import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAccessComponent } from './site-access.component';
import { PrimeFormFooterComponent } from '../../core/prime-form-footer/prime-form-footer.component'
import { PrimeToggleComponent } from '../../core//prime-toggle/prime-toggle.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ApplicantDataService } from '../../services/applicant-data.service';

describe('SiteAccessComponent', () => {
  let component: SiteAccessComponent;
  let fixture: ComponentFixture<SiteAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, Ng2SmartTableModule],
      declarations: [ SiteAccessComponent, PrimeFormFooterComponent, PrimeToggleComponent ],
      providers: [ApplicantDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have table data', () => {
    expect(component.tableData.length).toBeTruthy();
  });
});
