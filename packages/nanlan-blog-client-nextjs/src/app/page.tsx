"use client";

import { ArticleCard } from "@/components/ArticleCard";
import { LoadingWrapper } from "@/components/LoadingWrapper";
import { useArticleStore } from "@/store/article";

export default function Home() {
  const { articles, loading, error } = useArticleStore();

  return (
    <LoadingWrapper isLoading={loading} error={error} data={articles}>
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
