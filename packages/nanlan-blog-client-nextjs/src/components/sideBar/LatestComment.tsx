import { CommentProps } from "@/types/comment";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircleMore } from "lucide-react";
import Image from "next/image";

export function LatestComment({ comments }: { comments: CommentProps[] }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircleMore size={16} />
          最新评论
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {comments.map((item) => (
            <div className="flex items-center gap-2" key={item.id}>
              <Image
                src="/images/thumbnail.jpeg"
                alt={item.author.avatar}
                width={80}
                height={80}
                className="rounded-md object-cover"
              />
              <div className="flex-around flex flex-col justify-between gap-2">
                <h3 className="hover:text-primary line-clamp-2 text-sm font-medium">
                  {item.content}
                </h3>
                <p className="text-gray-custom text-xs">
                  {item.author.name}
                  <span className="px-1">/</span>
                  {item.createdAt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
