"use client";

import { articleService } from "@/services/article";
import { useInfiniteArticles } from "@/hooks/useInfiniteArticles";
import { LoadMore } from "@/components/loading/LoadMore";
import { PostPaginated } from "@/types/article";
import { Card, CardContent } from "@/components/ui/card";
import { TimeAxis } from "@/components/timeAxis/TimeAxis";

export function CategoryArticleList({
  initialData,
  categoryId,
}: {
  initialData: PostPaginated;
  categoryId: string;
}) {
  const { articles, ref, hasNextPage, isFetchingNextPage } =
    useInfiniteArticles({
      queryKey: ["articles", "category", categoryId],
      queryFn: ({ cursor, limit }) =>
        articleService.getArticlesByTagId(categoryId, { cursor, limit }),
      initialData,
    });

  return (
    <>
      <Card>
        <CardContent className="p-8">
          <TimeAxis
            articles={articles || []}
            title={`分类 - ${articles?.[0]?.categories?.[0]?.name}` || ""}
          />
        </CardContent>
      </Card>

      <LoadMore
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        loadMoreRef={ref}
      />
    </>
  );
}
