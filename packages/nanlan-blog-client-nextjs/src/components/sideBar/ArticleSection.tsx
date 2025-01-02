import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RotateCcw } from "lucide-react";
import Image from "next/image";
import { LoadingWrapper } from "../LoadingWrapper";
import { useStore } from "@/store/useStore";

export function ArticleSection() {
  const { articles, loading: isLoading, error } = useStore();

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
            {articles.map(
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
                        {item.title}
                      </h3>
                      <p className="text-gray-custom text-xs">
                        {item.createdAt}
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