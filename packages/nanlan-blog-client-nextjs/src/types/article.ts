import { CategoryResponse } from "./category";
import { TagResponse } from "./tag";

export interface ArticleResponse {
  id: string;
  title: string;
  description: string;
  content: string;
  createdAt: string;
  tags: TagResponse[];
  categories: CategoryResponse[];
  images?: string;
  count: number;
  updatedAt: string;
  readingTime: number;
}
