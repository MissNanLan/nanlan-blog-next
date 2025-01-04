import { request } from "@/lib/request";
import { Tag } from "@/types/tag";

export const TagService = {
  getTags: () => request.get<Tag[]>("/tag"),
};
