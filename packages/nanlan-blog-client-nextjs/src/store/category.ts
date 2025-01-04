import { create } from "zustand";
import { Category } from "@/types/category";
import { categoryService } from "@/services/category";

interface AppState {
  // 分类相关
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: Error | null;
  setError: (error: Error | null) => void;

  // 异步获取文章
  fetchCategories: () => Promise<Category[]>;
}

export const useCategoryStore = create<AppState>()((set, get) => ({
  // 分类相关
  categories: [],
  setCategories: (categories) => set({ categories }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  error: null,
  setError: (error) => set({ error }),

  // 异步获取分类
  fetchCategories: async () => {
    const { categories } = get();
    // 如果已有数据，直接返回
    if (categories.length > 0) return;

    try {
      set({ loading: true });
      const response = await categoryService.getCategories();
      set({ categories: response.data });
    } catch (error) {
      set({ error: error as Error });
    } finally {
      set({ loading: false });
    }
  },
}));
