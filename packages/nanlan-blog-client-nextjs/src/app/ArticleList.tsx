"use client";

import { articleService } from "@/services/article";
import { useInfiniteArticles } from "@/hooks/useInfiniteArticles";
import { LoadMore } from "@/components/loading/LoadMore";
import { ArticleCard } from "@/components/ArticleCard";
import { PostPaginated } from "@/types/article";

export function ArticleList({ initialData }: { initialData: PostPaginated }) {
  const { articles, ref, hasNextPage, isFetchingNextPage } =
    useInfiniteArticles({
      queryKey: ["articles", "home"],
      queryFn: articleService.getArticles,
      initialData,
    });

  return (
    <>
      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article?.id}>
            <ArticleCard {...article} />
          </div>
        ))}
      </div>
      <LoadMore
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        loadMoreRef={ref}
      />
    </>
  );
}
