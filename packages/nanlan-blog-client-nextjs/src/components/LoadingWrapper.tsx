import { SkeletonCard } from "./SkeletonCard";
import { Card, CardHeader } from "@/components/ui/card";

interface LoadingWrapperProps<T> {
  isLoading: boolean;
  error?: Error | null;
  data: T;
  LoadingComponent?: React.ComponentType;
  children: React.ReactNode;
}

export function LoadingWrapper<T>({
  isLoading,
  error,
  data,
  LoadingComponent = SkeletonCard,
  children,
}: LoadingWrapperProps<T>) {
  if (isLoading) return <LoadingComponent />;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || (Array.isArray(data) && data.length === 0))
    return (
      <Card className="flex h-full items-center justify-center">
        <CardHeader>暂无数据</CardHeader>
      </Card>
    );

  return <>{children}</>;
}
