import { CategoryArticleList } from "./CategoryArticleList";
import { articleService } from "@/services/article";
import { Suspense } from "react";
import { Loading } from "@/components/loading/Loading";
import { Params } from "@/types/common";

export default async function CategoryDetail({ params }: Params) {
  if (!params?.id) {
    return <div>Invalid category id</div>;
  }

  const initialData = await articleService.getArticlesByCategoryId(params.id);

  return (
    <Suspense fallback={<Loading />}>
      <CategoryArticleList initialData={initialData} categoryId={params?.id} />
    </Suspense>
  );
}
