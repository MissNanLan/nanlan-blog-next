import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  useInfiniteArticles,
  useInfiniteArticlesByCategory,
  useInfiniteArticlesByTag,
  useInfiniteArticlesByDate,
} from "./request/article";
import { PostParams } from "@/types/article";

type ArticleListType = "all" | "category" | "tag" | "date";

interface UseArticleListOptions {
  type: ArticleListType;
  params?: PostParams;
}

export function useArticleList({
  type = "all",
  params = {},
}: UseArticleListOptions) {
  const { ref, inView } = useInView();

  const queryHook = (() => {
    switch (type) {
      case "category":
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useInfiniteArticlesByCategory(params);
      case "tag":
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useInfiniteArticlesByTag(params);
      case "date":
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useInfiniteArticlesByDate(params);
      default:
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useInfiniteArticles(params);
    }
  })();

  const {
    data,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = queryHook;

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const articles = data?.pages.flatMap((page) => page.content) ?? [];

  return {
    articles,
    isLoading,
    error,
    loadMoreProps: {
      hasNextPage,
      isFetchingNextPage,
      loadMoreRef: ref,
    },
  };
}
