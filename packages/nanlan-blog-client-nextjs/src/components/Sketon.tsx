import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export const SkeletonCard = () => {
  return (
    <Card>
      <div className="flex items-center space-x-4 p-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      </div>
    </Card>
  );
};
