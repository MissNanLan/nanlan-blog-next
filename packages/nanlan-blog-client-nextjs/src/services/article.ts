import { request } from "@/lib/request";
import { Post, PostParams, PostPaginated } from "@/types/article";

export const articleService = {
  getArticle: (id: string) => request.get<Post>(`/post/${id}`),
  getArticles: (params: PostParams) =>
    request.get<PostPaginated>("/post", { params }),
  getArticlesByDate: (date: string, params?: PostParams) =>
    request.get<PostPaginated>(`/post/date/${date}`, { params }),
  getArticlesByCategoryId: (categoryId: string, params?: PostParams) =>
    request.get<PostPaginated>(`/post/category/${categoryId}`, { params }),
  getArticlesByTagId: (tagId: string, params: PostParams) =>
    request.get<PostPaginated>(`/post/tag/${tagId}`, { params }),
};
