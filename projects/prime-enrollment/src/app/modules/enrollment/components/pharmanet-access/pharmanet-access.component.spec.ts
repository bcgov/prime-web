import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmanetAccessComponent } from './pharmanet-access.component';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchOrganizationModalComponent } from '../search-organization-modal/search-organization-modal.component';
import { CacheService } from '@prime-core/services/cache.service';

describe('PharmanetAccessComponent', () => {
  let component: PharmanetAccessComponent;
  let fixture: ComponentFixture<PharmanetAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [SearchOrganizationModalComponent, PharmanetAccessComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmanetAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
