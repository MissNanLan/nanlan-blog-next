"use client";

import { TimeAxis } from "@/components/timeAxis/TimeAxis";
import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { useTag } from "@/hooks/tag";
import { LoadingWrapper } from "@/components/LoadingWrapper";

export default function TagDetail() {
  const { id } = useParams();
  const { data, isLoading, error } = useTag(id as string);

  return (
    <Card>
      <LoadingWrapper isLoading={isLoading} error={error} data={data}>
        <CardContent className="p-8">
          <TimeAxis
            articles={data?.posts || []}
            title={`标签 - ${data?.name}` || ""}
          />
        </CardContent>
      </LoadingWrapper>
    </Card>
  );
}
