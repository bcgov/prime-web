import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPharmaNetOrganizationComponent } from './add-pharma-net-organization.component';
import {FormsModule} from "@angular/forms";
import {BsModalService} from "ngx-bootstrap/modal";
import {ComponentLoaderFactory, PositioningService} from "ngx-bootstrap";
import {PrimeDataService} from '../../../../services/prime-data.service';


fdescribe('AddPharmaNetOrganizationComponent', () => {
  let component: AddPharmaNetOrganizationComponent;
  let fixture: ComponentFixture<AddPharmaNetOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPharmaNetOrganizationComponent ],
      imports: [FormsModule],
      providers: [BsModalService, ComponentLoaderFactory, PositioningService, PrimeDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPharmaNetOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
