import { useQuery } from "@tanstack/react-query";
import { TagService } from "@/services/tag";

export function useTags() {
  return useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await TagService.getTags();
      return response.data;
    },
  });
}

export function useTag(id: string) {
  return useQuery({
    queryKey: ["tag", id],
    queryFn: async () => {
      const response = await TagService.getTag(id);
      return response.data;
    },
    enabled: !!id,
  });
}
