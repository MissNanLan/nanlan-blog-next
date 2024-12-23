export interface ArticleProps {
  id: string;
  title: string;
  description: string;
  content: string;
  createdAt: string;
  tag: string;
  category: string;
  images?: string;
  count: number;
  updatedAt: string;
  readingTime: number;
}
