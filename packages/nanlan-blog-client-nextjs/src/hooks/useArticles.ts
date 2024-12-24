import { useQuery } from "@tanstack/react-query";
import { articleService } from "@/services/article";

export function useArticles() {
  return useQuery({
    queryKey: ["articles"],
    queryFn: () => articleService.getArticles(),
  });
}

export function useArticle(id: string) {
  return useQuery({
    queryKey: ["article", id],
    queryFn: () => articleService.getArticle(id),
    enabled: !!id,
  });
}
