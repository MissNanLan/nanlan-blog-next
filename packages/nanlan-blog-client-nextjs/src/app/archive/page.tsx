import { Suspense } from "react";
import { Loading } from "@/components/loading/Loading";
import { ArchiveAllList } from "./ArchiveAllList";
import { article } from "@/mock/articles";

export default async function ArchivePage() {
  // const articles = await articleService.getArticles({
  //   limit: 10,
  // });

  return (
    <Suspense fallback={<Loading />}>
      <ArchiveAllList initialData={article} />
    </Suspense>
  );
}
