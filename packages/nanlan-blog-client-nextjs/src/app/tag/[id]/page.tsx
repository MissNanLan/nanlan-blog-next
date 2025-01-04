"use client";

import { TimeAxis } from "@/components/timeAxis/TimeAxis";
import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { useArticlesByTagId } from "@/hooks/article";
import { LoadingWrapper } from "@/components/LoadingWrapper";

export default function TagDetail() {
  const { id } = useParams();
  const { data, isLoading, error } = useArticlesByTagId(id as string);

  return (
    <LoadingWrapper isLoading={isLoading} error={error} data={data}>
      <Card>
        <CardContent className="p-8">
          <TimeAxis
            articles={data || []}
            title={`标签 - ${data?.[0]?.tags?.[0]?.name}` || ""}
          />
        </CardContent>
      </Card>
    </LoadingWrapper>
  );
}
