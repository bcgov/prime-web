import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillBadgeComponent } from './pill-badge.component';
import {TooltipModule} from 'ngx-bootstrap';

describe('PillBadgeComponent', () => {
  let component: PillBadgeComponent;
  let fixture: ComponentFixture<PillBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillBadgeComponent],
      imports: [TooltipModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
