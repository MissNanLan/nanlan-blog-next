
export const articleKeys = {
    all: ["articles"] as const,
    lists: () => [...articleKeys.all, "list"] as const,
    list: (filters: string) => [...articleKeys.lists(), { filters }] as const,
    details: () => [...articleKeys.all, "detail"] as const,
    detail: (id: string) => [...articleKeys.details(), id] as const,
    category: (id: string) => [...articleKeys.all, "category", id] as const,
    tag: (id: string) => [...articleKeys.all, "tag", id] as const,
    date: (date: string) => [...articleKeys.all, "date", date] as const,
};
