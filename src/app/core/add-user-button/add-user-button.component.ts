import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PrimeDataService } from '../../services/prime-data.service';
import { Person } from '../../models/person.model';
import { DummyDataService } from '../../services/dummy-data.service';

@Component({
  selector: 'prime-add-user-button',
  templateUrl: './add-user-button.component.html',
  styleUrls: ['./add-user-button.component.scss']
})
export class AddUserButtonComponent implements OnInit {
  @Input() iconOnly: boolean = false;
  modalRef: BsModalRef;
  progress: any = [];
  public searchResultsPeople: Person[] = [];
  public showSearchResults: boolean;
  public addUserSelected: boolean = false;
  public today: Date = new Date();
  public endDate: Date = null;

  /** Binds to the form inputs used to generate search queries. Each field should correspond in name and type with attribtues on a Person object */
  public searchQuery: {lastName?: string, middleName?: string, firstName?: string, primeUserId?: string,
    dateOfBirth?: Date, email?: string, postal?: string, phone?: string } = {};

  constructor(private modalService: BsModalService, private dataService: PrimeDataService, private dummyDataService: DummyDataService) { }

  ngOnInit() {
    // Clear out the form inputs when the modal closes
    this.modalService.onHide.subscribe(() => {
      this.clearSearch();
    });

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.modalService.onHidden.subscribe(() => {this.addUserSelected = false; });
  }


  get currentProgressStep(): number {
    return Object.keys(this.searchQuery)
      .map(key => this.searchQuery[key]) // Convert to value
      .filter(x => x).length;  //Filter out falsy, like empty strings
  }

  /**
   * Instead of genuinely searching for the user's result, we just create a new
   * user and make it match their search query. Will need to be completely
   * re-written for prod.
   *
   */
  findUser(){
    const person = this.dummyDataService.createPeople(1)[0];
    // If there is already a checkbox selection from a previous search in the same modal session, clear it out
    this.addUserSelected = false;

    // Copy over the shared defined properties, ignore the rest.
    for (const key in this.searchQuery) {
      if (key in person) { // Don't use hasOwnProperty, inheriting prop is fine
         person[key] = this.searchQuery[key];
      }
    }
    //We don't want the set date from dummyDataService
    person.renewalDate = null;
    // Ensure user has to fill out Applicant contact info
    person.email = null;
    person.phone = null;
    // Set the Applicant to the recently found/created user
    this.dataService.user = person;
    // Only return one result (prototype only)
    this.searchResultsPeople = [person];
    console.log('findUser found:', person);
    this.showSearchResults = true;
  }

  addUser(){
    this.dataService.people.push(... this.searchResultsPeople);
    this.modalRef.hide();
  }

  canAddUser(): boolean {
    return this.addUserSelected;
  }

  canFindUser(): boolean {
    return (this.currentProgressStep >= this.maxProgressSteps)
  }

  get maxProgressSteps(): number {
    return 1;
  }

  clearSearch(){
    this.searchQuery = {};
    this.searchResultsPeople = [];
    this.showSearchResults = false;
    this.addUserSelected = false;
  }


}
