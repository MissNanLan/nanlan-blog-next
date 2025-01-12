import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RotateCcw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { LoadingWrapper } from "../loading/LoadingWrapper";
import { formatDate } from "@/utils";
import { useArticleContext } from "@/contexts/articleContext";

export function ArticleSection() {
  const { articles = [], isLoading, error } = useArticleContext();

  return (
    <Card className="w-[350px]">
      <LoadingWrapper isLoading={isLoading} error={error} data={articles}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RotateCcw size={16} />
            最新文章
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            {articles?.map(
              (item, index) =>
                index < 8 && (
                  <div className="flex items-center gap-2" key={item.id}>
                    <Image
                      src="/images/thumbnail.jpeg"
                      alt={item.title}
                      width={80}
                      height={80}
                      className="rounded-md object-cover"
                    />
                    <div className="flex-around flex flex-col justify-between gap-2">
                      <h3 className="hover:text-primary line-clamp-2 text-sm font-medium">
                        <Link href={`/article/${item.id}`}>{item.title}</Link>
                      </h3>
                      <p className="text-gray-custom text-xs">
                        {formatDate(item.createdAt)}
                      </p>
                    </div>
                  </div>
                ),
            )}
          </div>
        </CardContent>
      </LoadingWrapper>
    </Card>
  );
}
