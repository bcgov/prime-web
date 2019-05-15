/*
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
*/
const genSite = (
  name: string,
  id: string,
  address: string,
  type: string,
  vendor: string,
  groupName: string[]
) => {
  return {
    name,
    id,
    address,
    type,
    vendor,
    groupName,
    status: 'Active'
  };
};

export const organizations = [
  {
    name: 'Organization Name',
    sites: [
      genSite(
        'Site Name',
        '123',
        '123 fake St. Victoria, BC',
        'Pharmacy',
        'ARI',
        ['Western Canada']
      ),
      genSite(
        'Site Name',
        '123',
        '123 fake St. Victoria, BC',
        'Pharmacy',
        'ARI',
        ['Western Canada']
      ),
      genSite(
        'Site Name',
        '123',
        '123 fake St. Victoria, BC',
        'Pharmacy',
        'ARI',
        ['Western Canada']
      ),
      genSite(
        'Site Name',
        '123',
        '123 fake St. Victoria, BC',
        'Pharmacy',
        'ARI',
        ['Western Canada']
      ),
      genSite(
        'Site Name',
        '123',
        '123 fake St. Victoria, BC',
        'Pharmacy',
        'ARI',
        ['Western Canada']
      )
    ]
  }
];
