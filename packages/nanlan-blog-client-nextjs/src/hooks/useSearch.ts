import { useQuery } from "@tanstack/react-query";
import { articleService } from "@/services/article";
import { useState } from "react";

export function useSearch() {
  const [keyword, setKeyword] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["search", keyword],
    queryFn: () => articleService.getArticles({ keyword }),
    enabled: Boolean(keyword.trim()),
  });

  return {
    keyword,
    setKeyword,
    results: data?.data?.content || [],
    isLoading,
  };
}
