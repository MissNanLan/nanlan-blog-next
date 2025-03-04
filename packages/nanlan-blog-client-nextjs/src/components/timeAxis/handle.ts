import { Archive } from "@/types/archive";
import { Post } from "@/types/article";

// 文章项目转换
export const getArticleItems = (articleArr: Post[]) =>
  articleArr.map((article) => {
    const date = new Date(article.createdAt);
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      ...article,
    };
  });

// 分组类型
type GroupBy = 'year' | 'yearMonth';

// 通用分组函数
function groupArticles(articles: Post[], type: GroupBy): Archive[] {
  const items = getArticleItems(articles);

  return items
    .reduce((groups, item) => {
      // 根据分组类型确定匹配条件
      const matchCondition = (group: Archive) => {
        if (type === 'year') {
          return group.year === item.year;
        }
        return group.year === item.year && group.month === item.month;
      };

      // 查找已存在的组
      const existingGroup = groups.find(matchCondition);

      if (existingGroup) {
        existingGroup.articles.push(item);
        existingGroup.count = existingGroup.articles.length;
      } else {
        groups.push({
          year: item.year,
          month: item.month,
          articles: [item],
          count: 1,
        });
      }

      return groups;
    }, [] as Archive[])
    .sort((a, b) => {
      // 排序逻辑
      if (a.year !== b.year) {
        return b.year - a.year;
      }
      return b.month - a.month;
    });
}

// 按年月分组
export const getArticlesGroupByYearMonth = (articleArr?: Post[]) => {
  return groupArticles(articleArr || [], 'yearMonth');
};

// 按年分组
export const getArticlesGroupByYear = (articleArr?: Post[]) => {
  return groupArticles(articleArr || [], 'year');
};
