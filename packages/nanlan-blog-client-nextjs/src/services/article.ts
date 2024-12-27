import { request } from "@/lib/request";
import { ArticleResponse } from "@/types/article";
import { ApiResponse } from "@/types/request";

export const articleService = {
  getArticles: () => request.get<ArticleResponse[]>("/post"),
  getArticle: (id: string) =>
    request.get<ApiResponse<ArticleResponse>>(`/post/${id}`),
};
