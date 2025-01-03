import { create } from "zustand";
import { Post } from "@/types/article";
import { articleService } from "@/services/article";

interface AppState {
  // 主题相关
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;

  // 文章相关
  articles: Post[];
  setArticles: (articles: Post[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: Error | null;
  setError: (error: Error | null) => void;

  // 异步获取文章
  fetchArticles: () => Promise<void>;
}

export const useArticleStore = create<AppState>()((set, get) => ({
  // 主题相关
  theme: "light",
  setTheme: (theme) => set({ theme }),

  // 文章相关
  articles: [],
  setArticles: (articles) => set({ articles }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  error: null,
  setError: (error) => set({ error }),

  // 异步获取文章
  fetchArticles: async () => {
    const { articles } = get();
    // 如果已有数据，直接返回
    if (articles.length > 0) return;

    try {
      set({ loading: true });
      const response = await articleService.getArticles();
      set({ articles: response.data });
    } catch (error) {
      set({ error: error as Error });
    } finally {
      set({ loading: false });
    }
  },
}));
