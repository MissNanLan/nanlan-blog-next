import { Suspense } from "react";
import { Loading } from "@/components/loading/Loading";
import { ArchiveList } from "./ArchiveList";
import { articleService } from "@/services/article";
import { PageProps } from "@/types/common";

export default async function ArchiveDetail({ params }: PageProps) {
  const id = (await params).id;
  if (!id) {
    return <div>Invalid archive date</div>;
  }

  const articles = await articleService.getArticlesByDate(id, {
    limit: 10,
  });

  return (
    <Suspense fallback={<Loading />}>
      <ArchiveList initialData={articles} date={id} />
    </Suspense>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const id = (await params).id;
  return {
    title: `Archive - ${id}`,
  };
}
