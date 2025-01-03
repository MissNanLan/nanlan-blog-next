import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils";
import { Post } from "@/types/article";
import { getArticlesGroupByYear } from "./handle";

export function TimeAxis({
  articles,
  title,
}: {
  articles: Post[];
  title: string;
}) {
  const timeAxisData = getArticlesGroupByYear(articles);
  return (
    <div className="relative">
      {/* 主竖线 */}
      <div className="bg-primary absolute left-0 top-0 h-full w-[2px]" />
      <div className="left border-primary absolute left-[-10px] top-0 h-6 w-6 rounded-full border-4 bg-white" />
      <div className="ml-6 flex text-2xl font-bold">{title}</div>
      <div className="space-y-8">
        {timeAxisData.map((group) => (
          <div key={group.year} className="relative">
            <div className="relative">
              <div className="left absolute left-[-6px] top-1/2 h-3 w-3 rounded-full border-2 border-orange-400 bg-white" />
              <div className="mb-6 ml-6 mt-6 text-xl">{group.year}</div>
            </div>
            <div className="space-y-4">
              {group.articles.map((item) => (
                <div key={item.id} className="relative">
                  <div className="left absolute left-[-6px] top-1/2 h-3 w-3 rounded-full border-2 border-orange-400 bg-white" />
                  <div className="ml-8 flex">
                    <Image
                      src={item?.image || ""}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="rounded-md object-cover"
                    />
                    <div className="ml-2">
                      <div className="text-gray-custom flex items-center gap-1 text-sm">
                        <Calendar size={12} />
                        {formatDate(item.updatedAt)}
                      </div>
                      <div className="line-clamp-2">
                        <Link
                          href={`/article/${item.id}`}
                          className="hover:text-primary "
                        >
                          {item.title}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
