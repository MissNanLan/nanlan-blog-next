export interface TagResponse {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  name: string;
}

export interface TagProps extends TagResponse {
  count: number;
  color?: string; // 标签颜色
  description?: string;
}
