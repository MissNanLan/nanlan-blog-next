"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TagCloud } from "@/components/TagCloud";
import { useTags } from "@/hooks/tag";
import { LoadingWrapper } from "@/components/LoadingWrapper";

export default function Tag() {
  const { data: tags, isLoading, error } = useTags();
  return (
    <LoadingWrapper isLoading={isLoading} error={error} data={tags}>
      <Card>
        <CardHeader>
          <div className="text-2xl font-bold">标签</div>
        </CardHeader>
        <CardContent>
          <TagCloud tags={tags || []} />
        </CardContent>
      </Card>
    </LoadingWrapper>
  );
}
