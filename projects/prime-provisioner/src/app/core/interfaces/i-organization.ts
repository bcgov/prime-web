export interface IOrganization {
  name: string;
  sites: ISiteInfo[];
}

export interface ISiteInfo {
  name: string;
  id: string;
  address: string;
  type: string;
  vendor: string;
  groupName: string[];
}
