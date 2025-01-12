"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TagCloud } from "@/components/TagCloud";
import { useTags } from "@/hooks/request/tag";
import { LoadingWrapper } from "@/components/loading/LoadingWrapper";
import { PageLayout } from "@/components/layout/PageLayout";

export default function Tag() {
  const { data: tags, isLoading, error } = useTags();

  return (
    <PageLayout>
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
    </PageLayout>
  );
}
