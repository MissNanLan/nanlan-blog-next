import { Post } from "./article";

export interface Tag {
  id: string;
  name: string;
  count: number;
  posts: Post[];
}

export interface TagProps extends Tag {
  count: number;
  color?: string; // 标签颜色
  description?: string;
}
