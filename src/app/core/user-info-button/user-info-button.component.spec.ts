import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoButtonComponent, TargetType } from './user-info-button.component';
import {DatepickerComponent} from '../datepicker/datepicker.component';
import {PrimeDataModule} from '../../modules/prime-data/prime-data.module';
import {PillBadgeComponent} from '../pill-badge/pill-badge.component';
import {FormsModule} from '@angular/forms';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {BsModalService, ProgressbarModule, TooltipModule, ModalModule} from 'ngx-bootstrap';
import { DummyDataService } from '../../services/dummy-data.service';


describe('UserInfoButtonComponent', () => {
  let component: InfoButtonComponent;
  let fixture: ComponentFixture<InfoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoButtonComponent, DatepickerComponent, PillBadgeComponent],
      imports: [PrimeDataModule.forRoot(), FormsModule, NgxMyDatePickerModule.forRoot(), ProgressbarModule.forRoot(), TooltipModule.forRoot(), ModalModule],
      providers: [BsModalService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const dummyDataService = new DummyDataService();

    // Create Dummy Data in Data Service, copied from app.component.ts
    const dummyCollections = dummyDataService.createCollectionsDemo();
    component['dataService'].organizations = dummyCollections;
    const dummySites = [].concat(... dummyCollections.map(collection => collection.members ) ); //flatten array
    component['dataService'].sites = dummySites;

    const dummyPeople = dummyDataService.createPeopleDemo();
    component['dataService'].people = dummyPeople;
    component['dataService'].user = component['dataService'].people[0];

    const SA = dummyDataService.populateSiteAccessFromCollectionDemo( dummyCollections, dummyPeople );
    component['dataService'].siteAccesses.push(... SA);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to load a person', () => {
    const target = component['dataService'].people[0];
    component.targetId = target.objectId;
    component.openModal(new Event(null));
    expect(component.target).toBeTruthy();
    expect(component.person).toBeTruthy();
    expect(component.site).toBeUndefined();
    expect(component.person.name).toEqual(target.name);
    expect(component.targetType).toBe(TargetType.Person);
  });

  it('should re-load data when modal is re-opened', () => {
    const target = component['dataService'].people[0];
    component.targetId = target.objectId;
    component.openModal(new Event(null));
    expect(component.target).toBeTruthy();
    expect(component.person).toBeTruthy();
    expect(component.person.name).toEqual(target.name);
    target.name = 'NEW NAME';
    expect(component.person.name === target.name).toBeFalsy('component\'s data won\'t update until modal is opened again');
    component.openModal(new Event(null));
    expect(component.person.name).toEqual(target.name);
  });

  it('should be able to load a site', () => {
    const target = component['dataService'].sites[0];
    component.targetId = target.objectId;
    component.openModal(new Event(null));
    expect(component.target).toBeTruthy();
    expect(component.person).toBeUndefined();
    expect(component.site).toBeTruthy('site property should be set');
    expect(component.site.name).toEqual(target.name);
    expect(component.targetType).toBe(TargetType.Site, 'targetType should be set');
  });

  it('should set targetType for site', () => {
    const target = component['dataService'].sites[0];
    component.targetId = target.objectId;
    component.openModal(new Event(null));
    expect(component.targetType).toBe(TargetType.Site, 'targetType should be set');
  });

  it('should set targetType for person', () => {
    const target = component['dataService'].people[0];
    component.targetId = target.objectId;
    component.openModal(new Event(null));
    expect(component.targetType).toBe(TargetType.Person, 'target type should be TargetType.Person');
  });

  it('should have collections defined if and only if sites are set', () => {
    const target = component['dataService'].sites[0];
    component.targetId = target.objectId;
    component.openModal(new Event(null));
    expect(component.collection).toBeDefined();
  });
});
