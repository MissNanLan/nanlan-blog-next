"use client";

import { useArticlesForSidebar } from "@/hooks/request/article";
import { Post } from "@/types/article";
import { ReactNode, createContext, useContext } from "react";

interface ArticleContextType {
  articles: Post[];
  isLoading: boolean;
  error: Error | null;
}

const ArticleContext = createContext<ArticleContextType>({
  articles: [],
  isLoading: false,
  error: null,
});

export function ArticleProvider({ children }: { children: ReactNode }) {
  const { data, isLoading, error } = useArticlesForSidebar();
  
  return (
    <ArticleContext.Provider value={{
      articles: data || [],
      isLoading,
      error
    }}>
      {children}
    </ArticleContext.Provider>
  );
}

export function useArticleContext() {  const context = useContext(ArticleContext);
  if (context === undefined) {
    throw new Error("useArticleContext must be used within an ArticleProvider");
  }
  return context;
}
