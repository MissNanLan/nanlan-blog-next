import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  Tag,
  ChartBarBig,
  Clock,
  ChartBarStacked,
} from "lucide-react";
import { articles } from "@/mock/articles";
import {
  ArticleMetaItem,
  ArticleMetaItemProps,
} from "@/components/ArticleMetaItem";

export default function ArticlePage({ params }: { params: { id: string } }) {
  const { id } = params;
  const article = articles.find((item) => item.id === id);
  const articleInfoCardList: ArticleMetaItemProps[] = [
    {
      title: "发表于",
      icon: <Calendar size={14} />,
      value: article?.createdAt,
    },
    {
      title: "更新于",
      icon: <Calendar size={14} />,
      value: article?.updatedAt,
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
  );
}
