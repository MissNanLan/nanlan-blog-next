import { Post } from "@/types/article";
import { ArticleMetaItem, ArticleMetaItemProps } from "./ArticleMetaItem";
import { formatDate } from "@/utils";
import {
  Calendar,
  ChartBarBig,
  ChartBarStacked,
  ChevronRight,
  Clock,
  Tag,
} from "lucide-react";
import Link from "next/link";

export function ArticleMeta({ article }: { article: Post }) {
  const { createdAt, updatedAt, tags, categories, readingTime, count } =
    article;

  const articleMetaList: ArticleMetaItemProps[] = [
    {
      title: "发表于",
      icon: <Calendar size={14} />,
      value: formatDate(createdAt),
    },
    {
      title: "更新于",
      icon: <Calendar size={14} />,
      value: formatDate(updatedAt),
    },
    {
      title: "阅读量",
      icon: <ChartBarBig size={14} />,
      value: count,
    },
    {
      title: "阅读时长",
      icon: <Clock size={14} />,
      value: readingTime + "分钟",
    },
    {
      icon: <ChartBarStacked size={14} />,
      value: categories.map((category, index) => (
        <div className={category.id} key={category.id}>
          <Link href={`/category/${category.id}`}>
            <div className="text-gray hover:text-primary">{category.name}</div>
          </Link>
          {index !== article?.categories.length - 1 && (
            <ChevronRight size={14} />
          )}
        </div>
      )),
    },
    {
      icon: <Tag size={14} />,
      value: tags.map((tag) => (
        <div key={tag.id} className="flex items-center gap-1">
          <Link href={`/tag/${tag.id}`} key={tag.id}>
            <div
              key={tag.id}
              className="hover:text-primary rounded-sm bg-gray-200 p-0.5 text-xs text-gray-500"
            >
              {tag.name}
            </div>
          </Link>
        </div>
      )),
      needDivide: false,
    },
  ];

  return (
    <div className="text-gray-custom flex flex-wrap items-center gap-2 pt-2 text-xs">
      {articleMetaList.map((item, index) => (
        <div key={index}>
          <ArticleMetaItem {...item} />
        </div>
      ))}
    </div>
  );
}
