import { CommentProps } from "@/types/comment";

export const comments: CommentProps[] = [
  {
    id: "1",
    content: "这篇文章讲解得很清晰，对我理解 Next.js 13 的新特性很有帮助！",
    createdAt: "2024-03-15",
    author: {
      name: "张三",
      avatar: "/images/avatars/avatar-1.jpg",
    },
    articleId: "1",
    articleTitle: "使用 Next.js 13 构建现代博客",
  },
  {
    id: "2",
    content: "TypeScript 的高级类型确实需要好好理解，这篇文章总结得不错。",
    createdAt: "2024-03-14",
    author: {
      name: "李四",
      avatar: "/images/avatars/avatar-2.jpg",
    },
    articleId: "2",
    articleTitle: "TypeScript 高级类型系统详解",
  },
  {
    id: "3",
    content: "现代 CSS 的布局方案真的比以前方便多了，感谢分享！",
    createdAt: "2024-03-13",
    author: {
      name: "王五",
      avatar: "/images/avatars/avatar-3.jpg",
    },
    articleId: "3",
    articleTitle: "现代 CSS 布局技巧",
  },
  {
    id: "4",
    content: "Grid 布局的例子很实用，学到了很多。",
    createdAt: "2024-03-13",
    author: {
      name: "赵六",
      avatar: "/images/avatars/avatar-4.jpg",
    },
    articleId: "3",
    articleTitle: "现代 CSS 布局技巧",
  },
  {
    id: "5",
    content: "Server Components 确实能提升性能，期待更多相关内容。",
    createdAt: "2024-03-12",
    author: {
      name: "小明",
      avatar: "/images/avatars/avatar-5.jpg",
    },
    articleId: "1",
    articleTitle: "使用 Next.js 13 构建现代博客",
  },
];

// 获取最新的 n 条评论
export function getLatestComments(n: number = 5): CommentProps[] {
  return comments
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, n);
}
