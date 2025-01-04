"use client";
import { LoadingWrapper } from "@/components/LoadingWrapper";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useCategoryStore } from "@/store/category";

export default function CategoryPage() {
  const { categories, error, loading } = useCategoryStore();

  return (
    <LoadingWrapper isLoading={loading} error={error} data={categories}>
      <Card>
        <CardHeader>
          <div className="text-2xl font-bold">分类</div>
        </CardHeader>
        <CardContent>
          {categories.map((item) => (
            <div key={item.id}>
              <div className="flex items-center gap-2 py-1">
                <div className="h-3 w-3 rounded-full border-2 border-orange-400 bg-white"></div>
                <div>{item.name}</div>
                <div>{item.count}</div>
              </div>
              {item?.children?.map((it) => (
                <div
                  className="flex items-center gap-2 py-1 pl-4 text-xs"
                  key={it.id}
                >
                  <div className="border-primary h-3 w-3 rounded-full border-2 bg-white"></div>
                  <div key={it.id}>{it.name}</div>
                  <div>{it.count}</div>
                </div>
              ))}
            </div>
          ))}
        </CardContent>
      </Card>
    </LoadingWrapper>
  );
}
