import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TagCloud } from "@/components/TagCloud";
import { Suspense } from "react";
import { Loading } from "@/components/loading/Loading";
import { TagService } from "@/services/tag";

export default async function TagPage() {
  const tags = await TagService.getTags();

  return (
    <Suspense fallback={<Loading />}>
      <Card>
        <CardHeader>
          <div className="text-2xl font-bold">标签</div>
        </CardHeader>
        <CardContent>
          <TagCloud tags={tags || []} />
        </CardContent>
      </Card>
    </Suspense>
  );
}
