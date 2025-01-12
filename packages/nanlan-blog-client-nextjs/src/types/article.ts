import { Category } from "./category";
import { ApiResponse } from "./request";
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

export interface PostParams {
  cursor?: string;
  limit?: number;
  orderBy?: "asc" | "desc";
  keyword?: string;
  tagId?: string;
  categoryId?: string;
  date?: string;
}

export interface PageInfo {
  hasNextPage: boolean;
  nextCursor: string | null;
}

export interface PostPaginated {
  content: Post[];
  hasNextPage: boolean;
  nextCursor: string | null;
}
