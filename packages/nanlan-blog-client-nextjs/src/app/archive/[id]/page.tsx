"use client";

import { TimeAxis } from "@/components/timeAxis/TimeAxis";
import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { LoadingWrapper } from "@/components/LoadingWrapper";
import { useArticlesByYear } from "@/hooks/article";

export default function ArchiveDetail() {
  const { id } = useParams();
  const { data, isLoading, error } = useArticlesByYear(id as string);

  return (
    <Card>
      <LoadingWrapper isLoading={isLoading} error={error} data={data}>
        <CardContent className="p-8">
          <TimeAxis
            articles={data || []}
            title={`文章总览 - ${data?.length}` || ""}
          />
        </CardContent>
      </LoadingWrapper>
    </Card>
  );
}
