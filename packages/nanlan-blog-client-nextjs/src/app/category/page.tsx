import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CategoryService } from "@/services/category";
import { Suspense } from "react";
import { Loading } from "@/components/loading/Loading";

export default async function CategoryPage() {
  const categories = await CategoryService.getCategories();

  return (
    <Suspense fallback={<Loading />}>
      <Card>
        <CardHeader>
          <div className="text-2xl font-bold">分类</div>
        </CardHeader>
        <CardContent>
          {categories?.map((item) => (
            <div key={item.id}>
              <Link
                href={`/category/${item.id}?name=${item.name}`}
                className="flex items-center gap-2 py-1"
              >
                <div className="h-3 w-3 rounded-full border-2 border-orange-400 bg-white"></div>
                <div className="hover:text-primary">{item.name}</div>
                <div>{item.count}</div>
              </Link>
              {item?.children?.map((it) => (
                <Link
                  href={`/category/${item.id}?name=${item.name}`}
                  className="flex items-center gap-2 py-1 pl-4 text-xs"
                  key={it.id}
                >
                  <div className="border-primary h-3 w-3 rounded-full border-2 bg-white"></div>
                  <div key={it.id} className="hover:text-primary">
                    {it.name}
                  </div>
                  <div>{it.count}</div>
                </Link>
              ))}
            </div>
          ))}
        </CardContent>
      </Card>
    </Suspense>
  );
}
