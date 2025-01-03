import { useQuery } from "@tanstack/react-query";
import { articleService } from "@/services/article";

export function useArticles() {
  return useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await articleService.getArticles();
      return response.data;
    },
  });
}

export function useArticle(id: string) {
  return useQuery({
    queryKey: ["article", id],
    queryFn: async () => {
      const response = await articleService.getArticle(id);
      return response.data;
    },
    enabled: !!id,
  });
}

export function useArticlesByYear(date: string) {
  return useQuery({
    queryKey: ["articlesByYear", date],
    queryFn: async () => {
      const response = await articleService.getArticlesByDate(date);
      return response.data;
    },
  });
}
