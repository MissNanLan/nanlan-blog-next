"use client";

import { articles } from "@/mock/articles";
import { categories } from "@/mock/categories";

import { ArticleSection } from "./ArticleSection";
import { CommentSection } from "./CommentSection";
import { comments } from "@/mock/comments";
import { CategorySection } from "./CategorySection";
import { TagSection } from "./TagSection";
import { ArchiveSection } from "./ArchiveSection";

export function Sidebar() {
  return (
    <div className="flex flex-col gap-6">
      <ArticleSection />
      <CommentSection comments={comments} />
      <CategorySection categories={categories} />
      <TagSection />
      <ArchiveSection />
    </div>
  );
}
