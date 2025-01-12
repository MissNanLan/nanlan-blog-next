"use client";

import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";
import { useSearch } from "@/hooks/useSearch";
import { LoadingWrapper } from "../loading/LoadingWrapper";
import { DialogHeader } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";
import { SearchCard } from "./SearchCard";
import { DialogTitle } from "@radix-ui/react-dialog";

export function SearchDialog({ children }: { children: React.ReactNode }) {
  const { keyword, setKeyword, results, isLoading } = useSearch();

  return (
    <Dialog>
      <DialogTitle>
        <DialogTrigger asChild>{children}</DialogTrigger>
      </DialogTitle>
      <DialogContent className="h-[80vh] max-w-2xl">
        <div className="h-[60vh] max-w-2xl">
          <DialogHeader className="bg-background sticky top-0 z-10 mt-6">
            <Input
              placeholder="搜索文章..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </DialogHeader>
          <ScrollArea className="mt-6 h-full pr-4">
            <DialogDescription>
              <LoadingWrapper isLoading={isLoading} data={results}>
                <div className="space-y-4">
                  {results?.map((article) => (
                    <div key={article.id}>
                      <SearchCard article={article} keyword={keyword} />
                    </div>
                  ))}
                </div>
              </LoadingWrapper>
            </DialogDescription>
          </ScrollArea>
          <div className="text-muted-foreground mt-4 text-sm">
            {`共搜索到 ${results?.length} 条结果`}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
