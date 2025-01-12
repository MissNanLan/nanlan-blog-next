interface LoadMoreProps {
  hasNextPage?: boolean;
  isFetchingNextPage: boolean;
  loadMoreRef: (node?: Element | null) => void;
}

export function LoadMore({
  hasNextPage,
  isFetchingNextPage,
  loadMoreRef,
}: LoadMoreProps) {
  if (!hasNextPage) return null;

  return (
    <div ref={loadMoreRef} className="py-4 text-center">
      {isFetchingNextPage ? "加载中..." : "加载更多"}
    </div>
  );
}
