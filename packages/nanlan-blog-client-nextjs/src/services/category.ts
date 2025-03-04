
import { get } from "@/lib/request";
import { Category } from "@/types/category";

export const CategoryService = {
  getCategories: () => {
    return get<Category[]>("/category");
  },
};
