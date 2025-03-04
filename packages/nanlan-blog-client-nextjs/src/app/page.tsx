import { articleService } from "@/services/article";
import { Suspense } from "react";
import { Loading } from "@/components/loading/Loading";
import { ArticleList } from "./ArticleList";

export default async function ArticlesPage() {
  const initialData = await articleService.getArticles({ limit: 5 });

  return (
    <Suspense fallback={<Loading />}>
      <ArticleList initialData={initialData} />
    </Suspense>
  );
}
