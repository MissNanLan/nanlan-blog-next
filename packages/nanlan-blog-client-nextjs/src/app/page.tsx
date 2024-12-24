"use client";

import { ArticleCard } from "@/components/ArticleCard";
import { useArticles } from "@/hooks/useArticles";

export default function Home() {
  const { data, isLoading, error } = useArticles();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading articles</div>;

  return (
    <div className="space-y-4">
      {data?.map((article) => (
        <div key={article.id}>
          <ArticleCard {...article} />
        </div>
      ))}
    </div>
  );
}
