"use client";

import { TimeAxis } from "@/components/timeAxis/TimeAxis";
import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { LoadingWrapper } from "@/components/loading/LoadingWrapper";
import { useQueryParam } from "@/hooks/request/queryParams";
import { PageLayout } from "@/components/layout/PageLayout";
import { useArticleList } from "@/hooks/useArticleList";
import { LoadMore } from "@/components/loading/LoadMore";

export default function CategoryDetail() {
  const { id } = useParams();
  const categoryName = useQueryParam("name");
  const {
    articles = [],
    isLoading,
    error,
    loadMoreProps,
  } = useArticleList({
    type: "category",
    params: {
      categoryId: id as string,
    },
  });

  return (
    <PageLayout>
      <LoadingWrapper isLoading={isLoading} error={error} data={articles}>
        <Card>
          <CardContent className="p-8">
            <TimeAxis
              articles={articles || []}
              title={`分类 - ${categoryName}` || ""}
            />
          </CardContent>
        </Card>
        <LoadMore {...loadMoreProps} />
      </LoadingWrapper>
    </PageLayout>
  );
}
