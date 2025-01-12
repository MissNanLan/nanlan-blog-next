import { create } from "zustand";
import { Post } from "@/types/article";
import { articleService } from "@/services/article";

interface AppState {
  // 分类相关
  articles: Post[];
  setArticles: (articles: Post[]) => void;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  error: Error | null;
  setError: (error: Error | null) => void;

  // 异步获取文章
  fetchArticles: () => Promise<Post[]>;
}

export const useArticlesStore = create<AppState>()((set, get) => ({
  // 分类相关
  articles: [],
  setArticles: (articles) => set({ articles }),
  isLoading: false,
  setIsLoading: (loading: boolean) => set({ isLoading: loading }),
  error: null,
  setError: (error) => set({ error }),

  // 异步获取分类
  fetchArticles: async () => {
    const { articles } = get();
    // 如果已有数据，直接返回
    if (articles?.length > 0) return articles;
    try {
      set({ isLoading: true });
      const response = await articleService.getArticles();
      set({ articles: response.data.content });
    } catch (error) {
      set({ error: error as Error });
      return [];
    } finally {
      set({ isLoading: false });
    }
  },
}));
