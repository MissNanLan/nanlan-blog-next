import { request } from "@/lib/request";
import { ArticleResponse } from "@/types/article";

export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

export const articleService = {
  getArticles: () => request.get<ApiResponse<ArticleResponse[]>>("/post"),
  getArticle: (id: string) =>
    request.get<ApiResponse<ArticleResponse>>(`/post/${id}`),
};
