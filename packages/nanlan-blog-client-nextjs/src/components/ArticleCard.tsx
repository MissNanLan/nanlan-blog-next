import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArticleProps } from "@/types/article";
import { Calendar, ChartBarStacked, Tag } from "lucide-react";
import { ArticleMetaItem, ArticleMetaItemProps } from "./ArticleMetaItem";

export function ArticleCard(props: ArticleProps) {
  const { title, description, createdAt, tag, category, id } = props;
  const articleInfoCardList: ArticleMetaItemProps[] = [
    {
      title: "发表于",
      icon: <Calendar size={14} />,
      value: createdAt,
    },
    {
      icon: <ChartBarStacked size={14} />,
      value: category,
    },
    {
      icon: <Tag size={14} />,
      value: tag,
      needDivide: false,
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>
          <Link href={`/article/${id}`} className="hover:text-primary text-lg">
            {title}
          </Link>
        </CardTitle>
        <div className="text-gray-custom flex flex-wrap items-center gap-2 pt-2 text-xs">
          {articleInfoCardList.map((item, index) => (
            <div key={index}>
              <ArticleMetaItem {...item} />
            </div>
          ))}
        </div>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  );
}
