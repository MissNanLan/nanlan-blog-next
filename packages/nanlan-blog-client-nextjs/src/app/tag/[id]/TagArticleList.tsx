"use client";

import { articleService } from "@/services/article";
import { useInfiniteArticles } from "@/hooks/useInfiniteArticles";
import { LoadMore } from "@/components/loading/LoadMore";
import { PostPaginated } from "@/types/article";
import { Card, CardContent } from "@/components/ui/card";
import { TimeAxis } from "@/components/timeAxis/TimeAxis";
import { getArticlesGroupByYear } from "@/components/timeAxis/handle";

export function TagArticleList({
  initialData,
  tagId,
}: {
  initialData: PostPaginated;
  tagId: string;
}) {
  const { articles, ref, hasNextPage, isFetchingNextPage } =
    useInfiniteArticles({
      queryKey: ["articles", "tag", tagId],
      queryFn: ({ cursor, limit }) =>
        articleService.getArticlesByTagId(tagId, { cursor, limit }),
      initialData,
    });

  return (
    <>
      <Card>
        <CardContent className="p-8">
          <TimeAxis
            articles={articles || []}
            title={`标签 - ${articles?.[0]?.tags?.[0]?.name}` || ""}
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
