"use client";

import { TimeAxis } from "@/components/timeAxis/TimeAxis";
import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { LoadingWrapper } from "@/components/loading/LoadingWrapper";
import { useArticleList } from "@/hooks/useArticleList";
import { LoadMore } from "@/components/loading/LoadMore";

export default function ArchiveDetail() {
  const { id } = useParams();
  const { articles, isLoading, error, loadMoreProps } = useArticleList({
    type: "date",
    params: {
      date: id as string,
    },
  });

  return (
    <Card>
      <LoadingWrapper isLoading={isLoading} error={error} data={articles}>
        <CardContent className="p-8">
          <TimeAxis
            articles={articles || []}
            title={`文章总览 - ${articles?.length}` || ""}
          />

          <LoadMore {...loadMoreProps} />
        </CardContent>
      </LoadingWrapper>
    </Card>
  );
}
