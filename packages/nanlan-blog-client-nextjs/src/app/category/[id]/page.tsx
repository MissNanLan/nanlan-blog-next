import { CategoryArticleList } from "./CategoryArticleList";
import { articleService } from "@/services/article";
import { Suspense } from "react";
import { Loading } from "@/components/loading/Loading";
import { PageProps } from "@/types/common";
import { article } from "@/mock/articles";

export default async function CategoryDetail({ params }: PageProps) {
  const id = (await params).id;
  if (!id) {
    return <div>Invalid category id</div>;
  }

  // const initialData = await articleService.getArticlesByCategoryId(id);

  return (
    <Suspense fallback={<Loading />}>
      <CategoryArticleList initialData={article} categoryId={id} />
    </Suspense>
  );
}
