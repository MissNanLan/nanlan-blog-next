"use client";

import { articles } from "@/mock/articles";
import { categories } from "@/mock/categories";
import { tags } from "@/mock/tags";
import { useTags } from "@/hooks/tag";
import { LatestArticle } from "./LatestArticle";
import { LatestComment } from "./LatestComment";
import { comments } from "@/mock/comments";
import { LatestCategory } from "./LatestCategory";
import { TagCloud } from "./TagCloud";
import { getArchives } from "@/mock/archives";
import { LatestArchive } from "./Archive";

export function Sidebar() {
  // const { data: tags, isLoading, error } = useTags();

  return (
    <div className="flex flex-col gap-6">
      <LatestArticle articles={articles} />
      <LatestComment comments={comments} />
      <LatestCategory categories={categories} />
      <TagCloud tags={tags} />
      <LatestArchive archives={getArchives()} />
    </div>
  );
}
