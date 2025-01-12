import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@/types/article";
import { ArticleMeta } from "./AricleMeta";

export function ArticleCard(props: Post) {
  const { title, description, id } = props;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>
          <Link href={`/article/${id}`} className="hover:text-primary text-lg">
            {title}
          </Link>
        </CardTitle>
        <ArticleMeta article={props} />
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  );
}
