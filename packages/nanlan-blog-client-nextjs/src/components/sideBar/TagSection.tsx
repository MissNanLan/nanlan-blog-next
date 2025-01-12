import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTags } from "@/hooks/request/tag";
import { Tag } from "lucide-react";
import { LoadingWrapper } from "../loading/LoadingWrapper";
import { TagCloud } from "../TagCloud";

export function TagSection() {
  const { data: tags, isLoading, error } = useTags();

  return (
    <Card className="w-[350px]">
      <LoadingWrapper isLoading={isLoading} error={error} data={tags}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag size={16} />
            标签云
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TagCloud tags={tags || []} />
        </CardContent>
      </LoadingWrapper>
    </Card>
  );
}
