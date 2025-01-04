"use client";

import { TimeAxis } from "@/components/timeAxis/TimeAxis";
import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { useArticlesByCategoryId } from "@/hooks/article";
import { LoadingWrapper } from "@/components/LoadingWrapper";

export default function CategoryDetail() {
  const { id } = useParams();
  const { data, isLoading, error } = useArticlesByCategoryId(id as string);

  return (
    <LoadingWrapper isLoading={isLoading} error={error} data={data}>
      <Card>
        <CardContent className="p-8">
          <TimeAxis
            articles={data || []}
            title={`分类 - ${data?.[0]?.categories?.[0]?.name}` || ""}
          />
        </CardContent>
      </Card>
    </LoadingWrapper>
  );
}
