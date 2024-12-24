import { request } from "@/lib/request";

export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

export const articleService = {
  getArticles: () => request.get<ApiResponse<Article[]>>("/posts"),
  getArticle: (id: string) => request.get<ApiResponse<Article>>(`/posts/${id}`),
};
