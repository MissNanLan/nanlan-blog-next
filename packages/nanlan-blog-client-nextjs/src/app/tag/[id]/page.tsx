import { TagArticleList } from "./TagArticleList";
import { articleService } from "@/services/article";
import { Loading } from "@/components/loading/Loading";
import { Suspense } from "react";
import { PageProps } from "@/types/common";

export default async function TagDetail({ params }: PageProps) {
  const id = (await params).id;

  if (!id) {
    return <div>Invalid tag id</div>;
  }

  const initialData = await articleService.getArticlesByTagId(id, {
    limit: 10,
  });

  return (
    <Suspense fallback={<Loading />}>
      <TagArticleList initialData={initialData} tagId={id}></TagArticleList>
    </Suspense>
  );
}
