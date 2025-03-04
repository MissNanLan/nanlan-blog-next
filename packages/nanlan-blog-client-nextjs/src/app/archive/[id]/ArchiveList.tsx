"use client";

import { articleService } from "@/services/article";
import { useInfiniteArticles } from "@/hooks/useInfiniteArticles";
import { LoadMore } from "@/components/loading/LoadMore";
import { PostPaginated } from "@/types/article";
import { Card, CardContent } from "@/components/ui/card";
import { TimeAxis } from "@/components/timeAxis/TimeAxis";

export function ArchiveList({
  initialData,
  date,
}: {
  initialData: PostPaginated;
  date: string;
}) {
  const { articles, ref, hasNextPage, isFetchingNextPage } =
    useInfiniteArticles({
      queryKey: ["articles", "archive", date],
      queryFn: ({ cursor, limit }) =>
        articleService.getArticlesByDate(date, { cursor, limit }),
      initialData,
    });

  return (
    <>
      <Card>
        <CardContent className="p-8">
          <TimeAxis
            articles={articles || []}
            title={`文章总览 - ${articles?.length}`}
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
