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
