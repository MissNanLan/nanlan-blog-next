import { ArchiveGroup } from "@/types/archive";
import { ArticleProps } from "@/types/article";
import { articles } from "./articles";

export const getArchiveItems = (articleArr: ArticleProps[]) =>
  articleArr.map((article) => {
    const date = new Date(article.createdAt);
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      ...article,
    };
  });

// 按年月分组
export const getArchives = (articleArr?: ArticleProps[]) => {
  let arr = [];
  if (articleArr?.length) arr = getArchiveItems(articleArr);
  else arr = getArchiveItems(articles);
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
    }, [] as ArchiveGroup[])
    .sort((a, b) => {
      if (a.year !== b.year) {
        return b.year - a.year;
      }
      return b.month - a.month;
    });
};
