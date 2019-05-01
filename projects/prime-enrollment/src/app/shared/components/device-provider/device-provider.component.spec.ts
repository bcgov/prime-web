import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceProviderComponent } from './device-provider.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from '../error-block/error.component';

describe('DeviceProviderComponent', () => {
  let component: DeviceProviderComponent;
  let fixture: ComponentFixture<DeviceProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [DeviceProviderComponent, ErrorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
