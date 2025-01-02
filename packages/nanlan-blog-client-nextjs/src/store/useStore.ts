import { create } from "zustand";
import { Post } from "@/types/article";

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
}

export const useStore = create<AppState>((set) => ({
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
}));
