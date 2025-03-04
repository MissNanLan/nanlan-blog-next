import { get } from "@/lib/request";
import { Post, PostParams, PostPaginated } from "@/types/article";


export const articleService = {
  getArticle: (id: string) => get<Post>(`/post/${id}`),
  getArticles: (params: PostParams, init?: RequestInit) =>
    get<PostPaginated, PostParams>("/post", { params, init }),
  getArticlesByDate: (date: string, params?: Omit<PostParams, "date">, init?: RequestInit) =>
    get<PostPaginated, PostParams>(`/post/date/${date}`, { params, init }),
  getArticlesByCategoryId: (categoryId: string, params?: Omit<PostParams, "categoryId">, init?: RequestInit) =>
    get<PostPaginated, PostParams>(`/post/category/${categoryId}`, { params, init }),
  getArticlesByTagId: (tagId: string, params?: Omit<PostParams, "tagId">, init?: RequestInit) =>
    get<PostPaginated, PostParams>(`/post/tag/${tagId}`, { params, init }),
};
