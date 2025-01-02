import { Category } from "./category";
import { Tag } from "./tag";

export interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  createdAt: string;
  tags: Tag[];
  categories: Category[];
  image?: string;
  count: number;
  updatedAt: string;
  readingTime: number;
}
