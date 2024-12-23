import { CategoryProps } from "@/types/category";
import { articles } from "./articles";

// 统计每个分类下的文章数量
const categoryCount = articles.reduce(
  (acc, article) => {
    acc[article.category] = (acc[article.category] || 0) + 1;
    return acc;
  },
  {} as Record<string, number>,
);
export const categories: CategoryProps[] = [
  {
    id: "1",
    name: "前端开发",
    count: categoryCount["前端开发"] || 0,
    description: "前端技术、框架和最佳实践",
    children: [
      {
        id: "1-1",
        name: "React",
        count: 10,
        description: "用于构建用户界面的JavaScript库",
      },
      {
        id: "1-2",
        name: "Vue",
        count: 20,
        description: "用于构建用户界面的JavaScript库",
      },
    ],
  },
  {
    id: "2",
    name: "后端开发",
    count: categoryCount["后端开发"] || 0,
    description: "服务器端开发技术和架构",
    children: [
      {
        id: "2-1",
        name: "Node.js",
        count: 10,
        description: "用于构建服务器端应用的JavaScript运行时",
      },
    ],
  },
  {
    id: "3",
    name: "编程语言",
    count: categoryCount["编程语言"] || 0,
    description: "各种编程语言的学习和应用",
  },
  {
    id: "4",
    name: "开发工具",
    count: categoryCount["开发工具"] || 0,
    description: "提升开发效率的工具和技巧",
  },
  {
    id: "5",
    name: "算法与数据结构",
    count: categoryCount["算法与数据结构"] || 0,
    description: "常用算法和数据结构的讲解",
  },
];
