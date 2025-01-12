"use client";
import Link from "next/link";
import { LoadingWrapper } from "@/components/loading/LoadingWrapper";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useCategoryStore } from "@/store/category";
import { PageLayout } from "@/components/layout/PageLayout";

export default function CategoryPage() {
  const { categories, error, loading } = useCategoryStore();

  return (
    <PageLayout>
      <LoadingWrapper isLoading={loading} error={error} data={categories}>
        <Card>
          <CardHeader>
            <div className="text-2xl font-bold">分类</div>
          </CardHeader>
          <CardContent>
            {categories.map((item) => (
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
      </LoadingWrapper>
    </PageLayout>
  );
}
