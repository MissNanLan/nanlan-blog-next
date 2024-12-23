import { ArticleProps } from "./article";

export interface ArchiveGroup {
  year: number;
  month: number;
  articles: ArticleProps[];
  count: number;
}
