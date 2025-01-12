"use client";

import { TimeAxis } from "@/components/timeAxis/TimeAxis";
import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { LoadingWrapper } from "@/components/loading/LoadingWrapper";
import { PageLayout } from "@/components/layout/PageLayout";
import { useArticleList } from "@/hooks/useArticleList";
import { LoadMore } from "@/components/loading/LoadMore";

export default function TagDetail() {
  const { id } = useParams();
  const { articles, isLoading, error, loadMoreProps } = useArticleList({
    type: "tag",
    params: { tagId: id as string },
  });

  return (
    <PageLayout>
      <LoadingWrapper isLoading={isLoading} error={error} data={articles}>
        <Card>
          <CardContent className="p-8">
            <TimeAxis
              articles={articles || []}
              title={`标签 - ${articles?.[0]?.tags?.[0]?.name}` || ""}
            />
          </CardContent>
        </Card>
        <LoadMore {...loadMoreProps} />
      </LoadingWrapper>
    </PageLayout>
  );
}
