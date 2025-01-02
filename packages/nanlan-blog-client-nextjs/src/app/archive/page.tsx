"use client";

import { LoadingWrapper } from "@/components/LoadingWrapper";
import { TimeAxis } from "@/components/timeAxis/TimeAxis";
import { useArticles } from "@/hooks/article";

export default function ArchivePage() {
  const { data: articles, isLoading, error } = useArticles();

  return (
    <div className="container mx-auto px-4 py-8">
      <LoadingWrapper isLoading={isLoading} error={error} data={articles}>
        <TimeAxis
          articles={articles || []}
          title={`文章总览 - ${articles?.length}`}
        />
      </LoadingWrapper>
    </div>
  );
}
