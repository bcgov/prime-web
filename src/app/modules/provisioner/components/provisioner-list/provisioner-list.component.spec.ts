import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionerListComponent } from './provisioner-list.component';
import { ProvisionerRowComponent } from '../provisioner-row/provisioner-row.component';
import { CoreModule } from '../../../core/core.module';
import { FormsModule } from '@angular/forms';
import { PrimeDataService } from '../../../../services/prime-data.service';

describe('ProvisionerListComponent', () => {
  let component: ProvisionerListComponent;
  let fixture: ComponentFixture<ProvisionerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerListComponent, ProvisionerRowComponent ],
      imports: [ CoreModule, FormsModule ],
      providers: [PrimeDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
