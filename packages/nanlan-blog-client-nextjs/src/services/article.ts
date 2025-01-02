import { request } from "@/lib/request";
import { Post } from "@/types/article";

export const articleService = {
  getArticles: () => request.get<Post[]>("/post"),
  getArticle: (id: string) => request.get<Post>(`/post/${id}`),
  getArticlesByDate: (date: string) =>
    request.get<Post[]>(`/post/date/${date}`),
};
