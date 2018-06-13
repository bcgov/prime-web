import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionerDetailsComponent } from './provisioner-details.component';
import { CoreModule } from '../../../core/core.module';
import { ProvisionerModule } from '../../provisioner.module';
import { ProvisionerRowComponent } from '../../components/provisioner-row/provisioner-row.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { routes } from '../../provisioner-routing.modules';
import { ProvisionerDashboardComponent } from '../provisioner-dashboard/provisioner-dashboard.component';
import { VerifierModule } from '../../../verifier/verifier.module';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rx';
import { DummyDataService } from '../../../../services/dummy-data.service';
import { ProvisionerWidgetsComponent } from '../../components/provisioner-widgets/provisioner-widgets.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TooltipModule } from 'ngx-bootstrap';
import { ProvisionerListComponent } from '../../components/provisioner-list/provisioner-list.component';

describe('ProvisionerDetailsComponent', () => {
  let component: ProvisionerDetailsComponent;
  let fixture: ComponentFixture<ProvisionerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerDetailsComponent, ProvisionerRowComponent, ProvisionerDashboardComponent, ProvisionerWidgetsComponent, ProvisionerListComponent, ProvisionerRowComponent  ],
      imports: [ CoreModule, RouterTestingModule.withRoutes(routes), VerifierModule, NgxChartsModule, TooltipModule.forRoot() ],
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
