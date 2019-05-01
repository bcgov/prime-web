export interface IOrganization {
  name: string;
  sites: SiteInfo[];
}

export interface SiteInfo {
  name: string;
  id: string;
  address: string;
  type: string;
  vendor: string;
  groupName: string[];
}
