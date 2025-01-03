"use client";

import { useArticleStore } from "@/store/article";
import { useEffect } from "react";

export function DataProvider({ children }: { children: React.ReactNode }) {
  const { fetchArticles } = useArticleStore();

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return <>{children}</>;
}
