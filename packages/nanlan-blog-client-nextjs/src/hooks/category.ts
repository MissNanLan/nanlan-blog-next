import { categoryService } from "@/services/category";
import { useQuery } from "@tanstack/react-query";

export const useCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const response = await categoryService.getCategories();
      return response.data;
    },
  });
};
