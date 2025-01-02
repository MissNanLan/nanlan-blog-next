"use client";

import { ArticleCard } from "@/components/ArticleCard";
import { useArticles } from "@/hooks/article";
import { LoadingWrapper } from "@/components/LoadingWrapper";
import { useStore } from "@/store/useStore";
import { useEffect } from "react";

export default function Home() {
  const { data, isLoading, error } = useArticles();
  const { setArticles, setLoading, setError, articles } = useStore();

  // 当数据加载完成后，存储到 store
  useEffect(() => {
    if (data) {
      setArticles(data);
      setLoading(isLoading);
      setError(error);
    }
  }, [data, isLoading, error, setArticles, setLoading, setError]);

  return (
    <LoadingWrapper isLoading={isLoading} error={error} data={data}>
      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.id}>
            <ArticleCard {...article} />
          </div>
        ))}
      </div>
    </LoadingWrapper>
  );
}
