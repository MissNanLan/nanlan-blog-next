import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TagCloud } from "../TagCloud";
import { Tag as TagProps } from "@/types/tag";
import { Tag } from "lucide-react";
import { Loading } from "../loading/Loading";
import { Suspense } from "react";

export function TagSection({ tags }: { tags: TagProps[] }) {
  return (
    <Card className="w-[350px]">
      <Suspense fallback={<Loading />}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag size={16} />
            标签云
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TagCloud tags={tags || []} />
        </CardContent>
      </Suspense>
    </Card>
  );
}
