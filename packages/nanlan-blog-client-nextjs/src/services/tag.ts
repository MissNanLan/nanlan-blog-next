import { request } from "@/lib/request";
import { Tag } from "@/types/tag";

export const TagService = {
  getTags: () => request.get<Tag[]>("/tag"),
  getTag: (id: string) => request.get<Tag>(`/tag/${id}`),
};
