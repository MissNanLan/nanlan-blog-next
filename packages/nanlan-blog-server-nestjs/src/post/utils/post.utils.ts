export const categorySelect = {
  select: {
    id: true,
    name: true,
    parentId: true,
  },
} as const;

export const postSelect = {
  id: true,
  title: true,
  content: true,
  description: true,
  createdAt: true,
  updatedAt: true,
  readingTime: true,
  count: true,
  categories: categorySelect,
  tags: {
    select: {
      id: true,
      name: true,
    },
  },
  author: {
    select: {
      id: true,
      name: true,
      email: true,
    },
  },
} as const;

export function buildCategoryTree(categories: any[]) {
  const categoryMap = new Map();
  categories.forEach((category) => {
    categoryMap.set(category.id, { ...category, children: [] });
  });

  const rootCategories = [];
  categories.forEach((category) => {
    if (category.parentId) {
      const parent = categoryMap.get(category.parentId);
      if (parent) {
        parent.children.push(categoryMap.get(category.id));
      }
    } else {
      rootCategories.push(categoryMap.get(category.id));
    }
  });

  return rootCategories;
}

interface FindManyWithPaginationOptions {
  prisma: any;
  where?: any;
  cursor?: string;
  limit?: number;
  orderBy?: 'asc' | 'desc';
  shouldBuildCategoryTree?: boolean;
}
export async function findManyWithPagination({
  prisma,
  where,
  cursor,
  limit,
  orderBy = 'desc',
  shouldBuildCategoryTree = false,
}: FindManyWithPaginationOptions) {
  const posts = await prisma.post.findMany({
    where,
    ...(limit && { take: Number(limit) + 1 }),
    ...(cursor && {
      cursor: {
        id: cursor,
      },
      skip: 1,
    }),
    orderBy: {
      createdAt: orderBy,
    },
    select: postSelect,
  });

  const hasNextPage = limit ? posts.length > limit : false;
  const items = limit ? posts.slice(0, limit) : posts;
  const nextCursor = hasNextPage ? items[items.length - 1].id : null;

  return {
    items: items.map((post) => ({
      ...post,
      categories: shouldBuildCategoryTree
        ? buildCategoryTree(post.categories || [])
        : post.categories,
    })),
    pageInfo: {
      hasNextPage,
      nextCursor,
    },
  };
}
