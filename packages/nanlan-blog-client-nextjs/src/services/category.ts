import { request } from "@/lib/request";
import { Category } from "@/types/category";

export const categoryService = {
  getCategories: () => {
    return request.get<Category[]>("/category");
  },
};
