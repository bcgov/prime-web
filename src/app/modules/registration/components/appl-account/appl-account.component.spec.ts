import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplAccountComponent } from './appl-account.component';
import { FormsModule, NgForm } from '@angular/forms';
import { SharedCoreModule } from '../../../../shared-core/shared-core.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { PageSectionsComponent } from '../page-sections/page-sections.component';

describe('ApplAccountComponent', () => {
  let component: ApplAccountComponent;
  let fixture: ComponentFixture<ApplAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ApplAccountComponent,
        PageSectionsComponent
      ],
      imports: [
        FormsModule,
        SharedCoreModule,
        HttpClientTestingModule
      ],
      providers: [
        PrimeDataService,
        NgForm
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
