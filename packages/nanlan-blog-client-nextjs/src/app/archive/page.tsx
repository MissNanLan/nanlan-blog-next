"use client";

import { LoadingWrapper } from "@/components/LoadingWrapper";
import { TimeAxis } from "@/components/timeAxis/TimeAxis";
import { Card, CardContent } from "@/components/ui/card";
import { useArticleStore } from "@/store/article";

export default function ArchivePage() {
  const { articles, loading, error } = useArticleStore();

  return (
    <LoadingWrapper isLoading={loading} error={error} data={articles}>
      <Card>
        <CardContent className="p-8">
          <TimeAxis
            articles={articles || []}
            title={`文章总览 - ${articles?.length}`}
          />
        </CardContent>
      </Card>
    </LoadingWrapper>
  );
}
