import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { PharmaNetOrganization, PharmaNetOrgTypes } from '../../../../models/organizations.model';
import { PrimeDataService } from '../../../../services/prime-data.service';

interface PharmaNetSearchResult extends PharmaNetOrganization {
  isSelected: boolean;
}
@Component({
  selector: 'prime-add-pharma-net-organization',
  templateUrl: './add-pharma-net-organization.component.html',
  styleUrls: ['./add-pharma-net-organization.component.scss']
})
export class AddPharmaNetOrganizationComponent implements OnInit {

  public modalRef: BsModalRef;
  public searchQuery: {orgName?: string, orgCity?: string, orgType?: string} = {};

  public orgTypes: string[]; // values from PharmaNetOrgTypes enum

  public showSearchResults = false;
  public searchResults: PharmaNetSearchResult[] = [];

  @ViewChild('template') modalTemplate;

  constructor(private modalService: BsModalService, private dataService: PrimeDataService) { }

  ngOnInit() {
    this.orgTypes = Object.keys(PharmaNetOrgTypes).map(x => PharmaNetOrgTypes[x]);
  }

  openModal(){
    this.reset();
    this.modalRef = this.modalService.show(this.modalTemplate);
  }

  closeModal() {
    this.modalRef.hide();
  }

  find(){
    // ? should we abstract to dataService method
    const results: PharmaNetSearchResult[] = this.dataService.organizations.filter(org => {
      if (this.searchQuery.orgName){
        return org.title.toLowerCase().includes(this.searchQuery.orgName.toLowerCase());
      }
      return true;
    })
    .filter(org => {
        // filter out any orgs that have already been added
        return !this.dataService.user.selectedPharmaNetOrgs.includes(org);
    })
    .filter(org => {
      if (this.searchQuery.orgCity){
        return org.city.toLowerCase().includes(this.searchQuery.orgCity.toLowerCase());
      }
      return true;
    })
    .filter(org => {
      if (this.searchQuery.orgType){
        let target = org.type.toLowerCase();

        if (this.searchQuery.orgType === 'HA'){
          //Since 'HA', short for health authority, is contained in 'pHArmacy',
          //we have to avoid searching for HA and getting pharmacies
          target = target.replace('pharmacy', '');
        }

        return target.includes(this.searchQuery.orgType.toLowerCase());
      }
      return true;
    })
    .map((org: PharmaNetOrganization): PharmaNetSearchResult => {
      // Add a boolean we can use for the checkboxes, used in this component only.
      (org as PharmaNetSearchResult).isSelected = false;
      return (org as PharmaNetSearchResult);
    });


    this.showSearchResults = results.length > 0;
    this.searchResults = results;
  }

  cancel(){
    this.reset();
  }

  reset(){
    this.showSearchResults = false;
    this.searchResults = [];
    this.searchQuery = {};
  }

  addOrg(){
    const selected = this.searchResults.filter(x => x.isSelected);
    this.dataService.user.selectedPharmaNetOrgs = this.dataService.user.selectedPharmaNetOrgs.concat(selected);
    this.closeModal();
  }

  updateOrgType(orgType: string){
    // filter out the default 'Select type' placeholder value
    if (this.orgTypes.includes(orgType)){
      this.searchQuery.orgType = orgType;
    }
    else {
      this.searchQuery.orgType = null;
    }
  }

}
