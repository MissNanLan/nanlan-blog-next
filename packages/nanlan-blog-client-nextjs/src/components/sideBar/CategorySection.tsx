import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "lucide-react";
import { Suspense } from "react";
import Link from "next/link";
import { Category } from "@/types/category";
import { Loading } from "../loading/Loading";

export function CategorySection({ categories }: { categories: Category[] }) {
  return (
    <Card className="w-[350px]">
      <Suspense fallback={<Loading />}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book size={16} />
            分类
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            {categories?.map((item) => (
              <div key={item.id}>
                <Link href={`/category/${item.id}?name=${item.name}`}>
                  <div className="hover:bg-primary flex items-center justify-between  text-lg font-medium hover:px-2 hover:text-white">
                    <span className="line-clamp-2">{item.name}</span>
                    <span>{item.count}</span>
                  </div>
                </Link>

                {item?.children?.map((item) => (
                  <div key={item.id}>
                    <Link href={`/category/${item.id}?name=${item.name}`}>
                      <div
                        className="hover:bg-primary flex items-center justify-between pl-4 hover:px-2 hover:text-white"
                        key={item.id}
                      >
                        <span className="line-clamp-2 text-sm">
                          {item.name}
                        </span>
                        <span>{item.count}</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </CardContent>
      </Suspense>
    </Card>
  );
}
