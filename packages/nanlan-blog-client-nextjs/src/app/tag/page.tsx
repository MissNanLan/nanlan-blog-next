"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TagCloud } from "@/components/TagCloud";
import { useTags } from "@/hooks/tag";
import { LoadingWrapper } from "@/components/LoadingWrapper";

export default function Tag() {
  const { data: tags, isLoading, error } = useTags();
  return (
    <Card>
      <LoadingWrapper isLoading={isLoading} error={error} data={tags}>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">标签</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <TagCloud tags={tags || []} />
        </CardContent>
      </LoadingWrapper>
    </Card>
  );
}
