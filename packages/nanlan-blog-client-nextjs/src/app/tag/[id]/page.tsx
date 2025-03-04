import { TagArticleList } from "./TagArticleList";
import { articleService } from "@/services/article";
import { Loading } from "@/components/loading/Loading";
import { Suspense } from "react";
import { Params } from "@/types/common";

export default async function TagDetail({ params }: Params) {
  if (!params?.id) {
    return <div>Invalid tag id</div>;
  }

  const initialData = await articleService.getArticlesByTagId(params.id, {
    limit: 10,
  });

  return (
    <Suspense fallback={<Loading />}>
      <TagArticleList
        initialData={initialData}
        tagId={params.id}
      ></TagArticleList>
    </Suspense>
  );
}
