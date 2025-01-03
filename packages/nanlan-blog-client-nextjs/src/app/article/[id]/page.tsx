"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  Tag,
  ChartBarBig,
  Clock,
  ChartBarStacked,
} from "lucide-react";
import dayjs from "dayjs";
import {
  ArticleMetaItem,
  ArticleMetaItemProps,
} from "@/components/ArticleMetaItem";
import { useArticle } from "@/hooks/article";
import { LoadingWrapper } from "@/components/LoadingWrapper";

export default function ArticleDetail({ params }: { params: { id: string } }) {
  const { data: article, isLoading, error } = useArticle(params?.id);

  const articleInfoCardList: ArticleMetaItemProps[] = [
    {
      title: "发表于",
      icon: <Calendar size={14} />,
      value: dayjs(article?.createdAt).format("YYYY-MM-DD"),
    },
    {
      title: "更新于",
      icon: <Calendar size={14} />,
      value: dayjs(article?.updatedAt).format("YYYY-MM-DD"),
    },
    {
      title: "阅读量",
      icon: <ChartBarBig size={14} />,
      value: article?.count,
    },
    {
      title: "阅读时长",
      icon: <Clock size={14} />,
      value: article?.readingTime + "分钟",
    },
    {
      icon: <ChartBarStacked size={14} />,
      value: article?.category,
    },
    {
      icon: <Tag size={14} />,
      value: article?.tag,
      needDivide: false,
    },
  ];

  return (
    <LoadingWrapper isLoading={isLoading} error={error} data={article}>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>
            <div className="hover:text-primary text-lg">{article?.title}</div>
          </CardTitle>
          <div className="text-gray-custom flex flex-wrap items-center gap-2 pt-2 text-xs">
            {articleInfoCardList.map((item, index) => (
              <ArticleMetaItem {...item} key={index} />
            ))}
          </div>
        </CardHeader>
        <CardContent>{article?.description}</CardContent>
      </Card>
    </LoadingWrapper>
  );
}
