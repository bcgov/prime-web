import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionerDetailsComponent } from './provisioner-details.component';
import { CoreModule } from '../../../core/core.module';
import { ProvisionerModule } from '../../provisioner.module';
import { ProvisionerTableComponent } from '../../components/provisioner-table/provisioner-table.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { routes } from '../../provisioner-routing.modules';
import { ProvisionerDashboardComponent } from '../provisioner-dashboard/provisioner-dashboard.component';
import { VerifierModule } from '../../../verifier/verifier.module';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DummyDataService } from '../../../../services/dummy-data.service';

describe('ProvisionerDetailsComponent', () => {
  let component: ProvisionerDetailsComponent;
  let fixture: ComponentFixture<ProvisionerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerDetailsComponent, ProvisionerTableComponent, ProvisionerDashboardComponent,  ],
      imports: [ CoreModule, RouterTestingModule.withRoutes(routes), VerifierModule ],
      providers: [ PrimeDataService,

        // Mock the route "data" fields
        {
          provide: ActivatedRoute,
          useValue: { data: Observable.of({type: "user"}) }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionerDetailsComponent);
    component = fixture.componentInstance;
    const dummyData = new DummyDataService();
    component.person = dummyData.createPeople(1)[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
