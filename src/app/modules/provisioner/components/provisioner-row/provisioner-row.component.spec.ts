import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionerRowComponent } from '../provisioner-row/provisioner-row.component';
import { AlertModule } from 'ngx-bootstrap';
import { CoreModule } from '../../../core/core.module';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ProvisionerRowComponent', () => {
  let component: ProvisionerRowComponent;
  let fixture: ComponentFixture<ProvisionerRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerRowComponent ],
      imports: [ AlertModule, CoreModule, FormsModule, RouterTestingModule, NoopAnimationsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
