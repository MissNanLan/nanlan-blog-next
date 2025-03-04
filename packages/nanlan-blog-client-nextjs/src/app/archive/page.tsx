import { Suspense } from "react";
import { Loading } from "@/components/loading/Loading";
import { articleService } from "@/services/article";
import { ArchiveAllList } from "./ArchiveAllList";

export default async function ArchivePage() {
  const articles = await articleService.getArticles({
    limit: 10,
  });

  return (
    <Suspense fallback={<Loading />}>
      <ArchiveAllList initialData={articles} />
    </Suspense>
  );
}
