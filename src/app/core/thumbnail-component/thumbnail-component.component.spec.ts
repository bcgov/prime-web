import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailComponentComponent } from './thumbnail-component.component';

describe('ThumbnailComponentComponent', () => {
  let component: ThumbnailComponentComponent;
  let fixture: ComponentFixture<ThumbnailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
