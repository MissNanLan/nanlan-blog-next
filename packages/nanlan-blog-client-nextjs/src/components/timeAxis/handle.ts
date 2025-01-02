import { Archive } from "@/types/archive";
import { Post } from "@/types/article";

export const getArticleItems = (articleArr: Post[]) =>
  articleArr.map((article) => {
    const date = new Date(article.createdAt);
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      ...article,
    };
  });

// 按年月分组
export const getArticlesGroupByYear = (articleArr?: Post[]) => {
  const arr = getArticleItems(articleArr || []);
  return arr
    .reduce((groups, item) => {
      // 查找相同年月组
      const existingGroup = groups.find(
        (group) => group.year === item.year && group.month == item.month,
      );

      // 查找相同年月的组
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
      if (a.year !== b.year) {
        return b.year - a.year;
      }
      return b.month - a.month;
    });
};
