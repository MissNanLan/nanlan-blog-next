export interface CategoryProps {
  id: string;
  name: string;
  count: number;
  icon?: string;
  description?: string;
  parentId?: string;
  children?: CategoryProps[];
}
