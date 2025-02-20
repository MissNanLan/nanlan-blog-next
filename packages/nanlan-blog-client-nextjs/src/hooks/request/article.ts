import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { articleService } from "@/services/article";
import { PostPaginated, PostParams } from "@/types/article";
import { articleKeys } from "./articleKeys";

// 基础文章列表查询
export function useInfiniteArticles(options: PostParams = {}) {
  return useInfiniteQuery<PostPaginated>({
    queryKey: articleKeys.lists(),
    queryFn: async ({ pageParam }) => {
      const response = await articleService.getArticles({
        ...options,
        cursor: pageParam as string | undefined,
        limit: 10,
      });
      return response.data;
    },
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
}

// 分类文章列表
export function useInfiniteArticlesByCategory(options: PostParams = {}) {
  return useInfiniteQuery<PostPaginated>({
    queryKey: articleKeys.category(options.categoryId!),
    queryFn: async ({ pageParam }) => {
      const response = await articleService.getArticlesByCategoryId(
        options.categoryId!,
        {
          cursor: pageParam as string | undefined,
          limit: 10,
        },
      );
      return response.data;
    },
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
}

// 标签文章列表
export function useInfiniteArticlesByTag(options: PostParams = {}) {
  return useInfiniteQuery<PostPaginated>({
    queryKey: articleKeys.tag(options.tagId!),
    queryFn: async ({ pageParam }) => {
      const response = await articleService.getArticlesByTagId(options.tagId!, {
        cursor: pageParam as string | undefined,
        limit: 10,
      });
      return response.data;
    },
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
}

// 日期文章列表
export function useInfiniteArticlesByDate(options: PostParams = {}) {
  return useInfiniteQuery<PostPaginated>({
    queryKey: articleKeys.date(options.date!),
    queryFn: async ({ pageParam }) => {
      const response = await articleService.getArticlesByDate(options.date!, {
        cursor: pageParam as string | undefined,
        limit: 10,
      });
      return response.data;
    },
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
}

// 单篇文章详情
export function useArticle(id: string) {
  return useQuery({
    queryKey: articleKeys.detail(id),
    queryFn: async () => {
      const response = await articleService.getArticle(id);
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });
}

// 给 sidebar 使用的文章列表查询
export function useArticlesForSidebar() {
  return useQuery({
    queryKey: [...articleKeys.lists(), "sidebar"],
    queryFn: async () => {
      const response = await articleService.getArticles({});
      console.log("===response===", response);
      return response.data?.content;
    },
    staleTime: 0, // 5分钟内不重新请求
  });
}
