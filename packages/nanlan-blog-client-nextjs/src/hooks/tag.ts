import { useQuery } from "@tanstack/react-query";
import { TagService } from "@/services/tag";

export function useTags() {
  return useQuery({
    queryKey: ["tags"],
    queryFn: () => TagService.getTags(),
  });
}

export function useTag(id: string) {
  return useQuery({
    queryKey: ["tag", id],
    queryFn: () => TagService.getTag(id),
    enabled: !!id,
  });
}
