import { useSearchParams } from "next/navigation";

export function useQueryParam(key: string) {
  const searchParams = useSearchParams();
  const value = searchParams.get(key);
  return value;
}

// 如果需要支持多个参数
export function useQueryParams<T extends string>(
  keys: T[],
): Record<T, string | null> {
  const searchParams = useSearchParams();
  return keys.reduce(
    (params, key) => {
      params[key] = searchParams.get(key);
      return params;
    },
    {} as Record<T, string | null>,
  );
}
