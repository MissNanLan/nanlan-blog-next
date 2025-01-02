import { Post } from "./article";

export interface Archive {
  year: number;
  month: number;
  articles: Post[];
  count: number;
}
