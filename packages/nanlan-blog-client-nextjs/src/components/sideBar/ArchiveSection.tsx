import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Archive } from "lucide-react";
import Link from "next/link";
import { useArticleStore } from "@/store/article";
import { getArticlesGroupByYear } from "../timeAxis/handle";
import { LoadingWrapper } from "../LoadingWrapper";

export function ArchiveSection() {
  const { articles, loading, error } = useArticleStore();
  const archives = getArticlesGroupByYear(articles);

  const chineseMonth = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ];
  const monthFormat = (month: number) => (month < 10 ? `0${month}` : month);

  return (
    <Card className="w-[350px]">
      <LoadingWrapper isLoading={loading} error={error} data={archives}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Archive size={16} />
            归档
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            {archives?.map((item) => (
              <Link
                href={`/archive/${item.year}-${monthFormat(item.month)}`}
                key={item.year}
              >
                <div key={item.year}>
                  <div className="hover:bg-primary flex items-center justify-between font-medium hover:px-2 hover:text-white">
                    <div>
                      <span className="pr-2">
                        {chineseMonth[item.month - 1]}
                      </span>
                      <span>{item.year}</span>
                    </div>
                    <div>{item.count}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </LoadingWrapper>
    </Card>
  );
}
