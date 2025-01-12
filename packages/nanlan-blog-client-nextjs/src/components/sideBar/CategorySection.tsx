import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "lucide-react";
import { useCategoryStore } from "@/store/category";
import { LoadingWrapper } from "../loading/LoadingWrapper";
import { useEffect } from "react";
import Link from "next/link";

export function CategorySection() {
  const { categories, error, loading, fetchCategories } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <LoadingWrapper isLoading={loading} error={error} data={categories}>
      <Card className="w-[350px]">
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
      </Card>
    </LoadingWrapper>
  );
}
