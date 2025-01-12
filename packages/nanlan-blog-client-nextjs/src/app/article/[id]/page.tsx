"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useArticle } from "@/hooks/request/article";
import { LoadingWrapper } from "@/components/loading/LoadingWrapper";
import { ArticleMeta } from "@/components/AricleMeta";
import { PageLayout } from "@/components/layout/PageLayout";

export default function ArticleDetail({ params }: { params: { id: string } }) {
  const { data: article, isLoading, error } = useArticle(params?.id);

  return (
    <PageLayout>
      <LoadingWrapper isLoading={isLoading} error={error} data={article}>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>
              <div className="hover:text-primary text-lg">{article?.title}</div>
            </CardTitle>
            <ArticleMeta article={article!} />
          </CardHeader>
          <CardContent>{article?.content}</CardContent>
        </Card>
      </LoadingWrapper>
    </PageLayout>
  );
}
