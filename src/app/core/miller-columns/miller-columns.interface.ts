
export interface MillerItem {
  title: string;
  children: MillerItem[];
  description?: string;

  // A max of 1 item can be open in a given set of sibling items.
  open?: boolean;
}
