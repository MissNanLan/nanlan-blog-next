import { Suspense } from "react";
import { Loading } from "@/components/loading/Loading";
import { ArchiveList } from "./ArchiveList";
import { articleService } from "@/services/article";
import { Params } from "@/types/common";

export default async function ArchiveDetail({ params }: Params) {
  if (!params?.id) {
    return <div>Invalid archive date</div>;
  }

  const articles = await articleService.getArticlesByDate(params.id, {
    limit: 10,
  });

  return (
    <Suspense fallback={<Loading />}>
      <ArchiveList initialData={articles} date={params.id} />
    </Suspense>
  );
}

export async function generateMetadata({ params }: Params) {
  return {
    title: `Archive - ${params.id}`,
  };
}
