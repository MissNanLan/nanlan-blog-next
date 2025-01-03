export interface Category {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  count: number;
  parentId?: string;
  children?: Category[];
}
