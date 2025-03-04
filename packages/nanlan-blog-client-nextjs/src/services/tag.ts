
import { Tag } from "@/types/tag";
import { get } from "@/lib/request";
import { PostParams } from "@/types/article";

export const TagService = {
  getTags: () => get<Tag[], PostParams>("/tag"),
};
