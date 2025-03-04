import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArticleMeta } from "@/components/AricleMeta";
import { Suspense } from "react";
import { Loading } from "@/components/loading/Loading";
import { articleService } from "@/services/article";
import { PageProps } from "@/types/common";

export default async function ArticleDetail({ params }: PageProps) {
  const id = (await params).id;
  if (!id) {
    return <div></div>;
  }

  const article = await articleService.getArticle(id);

  return (
    <Card>
      <Suspense fallback={<Loading />}>
        <CardHeader className="pb-3">
          <CardTitle>
            <div className="hover:text-primary text-lg">{article?.title}</div>
          </CardTitle>
          <ArticleMeta article={article!} />
        </CardHeader>
        <CardContent>{article?.content}</CardContent>
      </Suspense>
    </Card>
  );
}
