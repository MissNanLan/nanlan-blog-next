import { useQuery } from "@tanstack/react-query";
import { TagService } from "@/services/tag";

export function useTag() {
  return useQuery({
    queryKey: ["tags"],
    queryFn: () => TagService.getTags(),
  });
}

export function useTags(id: string) {
  return useQuery({
    queryKey: ["tag", id],
    queryFn: () => TagService.getTag(id),
    enabled: !!id,
  });
}
