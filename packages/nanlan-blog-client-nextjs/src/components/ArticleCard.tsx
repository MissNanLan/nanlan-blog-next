import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArticleResponse } from "@/types/article";
import { Calendar, ChartBarStacked, Tag } from "lucide-react";
import dayjs from "dayjs";
import { ArticleMetaItem, ArticleMetaItemProps } from "./ArticleMetaItem";

export function ArticleCard(props: ArticleResponse) {
  const { title, description, createdAt, tags, categories, id } = props;
  const articleInfoCardList: ArticleMetaItemProps[] = [
    {
      title: "发表于",
      icon: <Calendar size={14} />,
      value: dayjs(createdAt).format("YYYY-MM-DD"),
    },
    // {
    //   icon: <ChartBarStacked size={14} />,
    //   value: dayjs(category).format("YYYY-MM-DD"),
    // },
    {
      icon: <Tag size={14} />,
      value: tags.map((tag) => (
        <div
          key={tag.id}
          className="text-gray rounded-sm bg-gray-200 p-0.5 text-xs text-gray-500"
        >
          {tag.name}
        </div>
      )),
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
