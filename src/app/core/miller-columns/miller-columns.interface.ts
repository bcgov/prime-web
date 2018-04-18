import { DataSet } from "ng2-smart-table/lib/data-set/data-set";

export interface MillerItem {
  id: string;

  /**
   * associationId, if present, should match the id of another MillerItem in an
   * adjacent column (e.g. on a Site, to show which Collection it belongs to).
   *
   * If associationId is absent, item will always be shown.
   *
   * Note: Modifying order of columns can potentially require updating associationIds to reflect new order (TODO: Verify/Document).
   */
  associationId?: string;

  title: string;
  hasChildren: boolean;

  hasWarning: boolean;
  hasAlert: boolean;
  isActive?: boolean;

  // Applies to first 2 columns only. A max of 1 item can be open per column.
  open?: boolean;
  // Applies to final column only. Multiple items can be checked.
  checked?: boolean;
  // Used for search results, hide items that don't match query.
  hidden?: boolean;
}



export interface MillerColumnConfig {
  //Required
  data: {
    collections: MillerItem[],
    sites: MillerItem[],
    people: MillerItem[],
  },

  //Optional
  options?: {
    primaryColumn?: string
  }
}

export interface MillerColumn {
  title: string;
  items: MillerItem[];
  index: number;
}
