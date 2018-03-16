
export interface MillerItem {
  id: string;
  parentId: string;

  title: string;
  hasChildren: boolean;


  // TODO: - Trying to remove and replace with ids/parentIds and hasChldren
  children?: MillerItem[];
  description?: string;

  // A max of 1 item can be open in a given set of sibling items.
  open?: boolean;
}


// export interface MillerColumn {

// }
