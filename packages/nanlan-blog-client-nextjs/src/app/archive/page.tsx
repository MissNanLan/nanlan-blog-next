"use client";

import { LoadingWrapper } from "@/components/loading/LoadingWrapper";
import { LoadMore } from "@/components/loading/LoadMore";
import { TimeAxis } from "@/components/timeAxis/TimeAxis";
import { Card, CardContent } from "@/components/ui/card";
import { useArticleList } from "@/hooks/useArticleList";

export default function ArchivePage() {
  const { articles, isLoading, error, loadMoreProps } = useArticleList({
    type: "all",
  });

  return (
    <LoadingWrapper isLoading={isLoading} error={error} data={articles}>
      <Card>
        <CardContent className="p-8">
          <TimeAxis
            articles={articles || []}
            title={`文章总览 - ${articles?.length}`}
          />

          <LoadMore {...loadMoreProps} />
        </CardContent>
      </Card>
    </LoadingWrapper>
  );
}
