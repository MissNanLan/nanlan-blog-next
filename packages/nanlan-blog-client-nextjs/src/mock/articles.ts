import { ArticleProps } from "@/types/article";

export const articles: ArticleProps[] = [
  {
    id: "1",
    title: "使用 Next.js 13 构建现代博客",
    description:
      "探索 Next.js 13 的新特性，包括 App Router、Server Components 等",
    content: `
# Next.js 13 新特性介绍

## App Router

App Router 是 Next.js 13 的一个重要新特性，它提供了：

- 更直观的路由组织方式
- 更好的性能优化
- 更灵活的布局系统

## Server Components

Server Components 可以：

1. 减少客户端 JavaScript 体积
2. 提高首屏加载速度
3. 改善 SEO

\`\`\`typescript
// 示例代码
export default function ServerComponent() {
  return <div>This is a server component</div>;
}
\`\`\`

> Server Components 是 React 18 的重要特性之一

更多内容请参考[官方文档](https://nextjs.org)。
    `,
    createdAt: "2024-03-15",
    category: "Next.js,React",
    tag: "nextjs",
    readingTime: 10,
    count: 10,
    updatedAt: "2024-04-12",
    images: "/images/thumbnail.png",
  },
  {
    id: "2",
    title: "TypeScript 高级类型系统详解",
    description: "深入理解 TypeScript 的类型系统，掌握高级类型的使用方法",
    content: "这是文章的详细内容...",
    createdAt: "2024-03-14",
    category: "CSS, Web开发",
    tag: "nextjs",
    readingTime: 10,
    count: 10,
    updatedAt: "2024-05-12",
  },
  {
    id: "3",
    title: "现代 CSS 布局技巧",
    description: "学习 Flexbox 和 Grid 布局的最佳实践",
    content: "这是文章的详细内容...",
    createdAt: "2024-02-13",
    category: "CSS, Web开发",
    tag: "前端开发",
    readingTime: 3,
    count: 190,
    updatedAt: "2024-05-12",
  },
  {
    id: "4",
    title: "现代 CSS 布局技巧",
    description: "学习 Flexbox 和 Grid 布局的最佳实践",
    content: "这是文章的详细内容...",
    createdAt: "2024-04-12",
    category: "CSS, Web开发",
    tag: "前端开发",
    readingTime: 10,
    count: 10,
    updatedAt: "2024-05-12",
  },
  {
    id: "5",
    title: "现代 CSS 布局技巧",
    description: "学习 Flexbox 和 Grid 布局的最佳实践",
    content: "这是文章的详细内容...",
    createdAt: "2023-04-12",
    category: "CSS, Web开发",
    tag: "前端开发",
    readingTime: 10,
    count: 100,
    updatedAt: "2024-05-12",
  },
  {
    id: "6",
    title: "现代 CSS 布局技巧",
    description: "学习 Flexbox 和 Grid 布局的最佳实践",
    content: "这是文章的详细内容...",
    createdAt: "2024-05-12",
    category: "CSS,Web开发",
    tag: "前端开发",
    readingTime: 23,
    count: 10,
    updatedAt: "2024-05-12",
  },
];

export const getAllArticlesByCondition = (tag: string) => {
  const arr = articles.filter((article) => article.tag === tag);
};
