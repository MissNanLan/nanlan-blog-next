import { Post } from "@/types/article";
import { HighlightText } from "./HighlightText";
import Link from "next/link";

export function SearchCard({
  article,
  keyword = "",
}: {
  article: Post;
  keyword?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-2">
          <div className="border-primary h-4 w-4 rounded-full border border-4"></div>
          <div className="flex flex-col gap-1">
            <Link href={`/article/${article.id}`}>
              <div className="font-medium">
                <HighlightText text={article.title} highlight={keyword} />
              </div>
              <div className="text-muted-foreground text-sm">
                <HighlightText text={article.description} highlight={keyword} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
