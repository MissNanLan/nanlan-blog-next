"use client";

import { ArticleCard } from "@/components/ArticleCard";
import { useArticles } from "@/hooks/useArticles";
import { SkeletonCard } from "@/components/Sketon";

export default function Home() {
  const { data, isLoading, error } = useArticles();
  console.log("data", data);

  if (error) return <div>Error loading articles</div>;
  if (!data?.length) return <div>No articles found</div>;

  return (
    <div className="space-y-4">
      {isLoading ? (
        <SkeletonCard />
      ) : (
        // 数据加载完成后显示实际内容
        data?.map((article) => (
          <div key={article.id}>
            <ArticleCard {...article} />
          </div>
        ))
      )}
    </div>
  );
}
