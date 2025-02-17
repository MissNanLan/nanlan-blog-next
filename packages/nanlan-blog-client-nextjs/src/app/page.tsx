"use client";

import { ArticleCard } from "@/components/ArticleCard";
import { PageLayout } from "@/components/layout/PageLayout";
import { LoadingWrapper } from "@/components/loading/LoadingWrapper";
import { LoadMore } from "@/components/loading/LoadMore";
import { useArticleList } from "@/hooks/useArticleList";

export default function Home() {
  const { articles, isLoading, error, loadMoreProps } = useArticleList({
    type: "all",
  });

  return (
    <PageLayout>
      <LoadingWrapper isLoading={isLoading} error={error} data={articles}>
        <div className="space-y-4">
          {articles?.map((article) => (
            <div key={article.id}>
              <ArticleCard {...article} />
            </div>
          ))}
          <LoadMore {...loadMoreProps} />
        </div>
      </LoadingWrapper>
    </PageLayout>
  );
}
