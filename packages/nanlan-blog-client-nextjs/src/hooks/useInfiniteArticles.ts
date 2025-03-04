"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { PostPaginated } from "@/types/article";

interface InfiniteArticlesOptions {
    queryKey: string[];
    queryFn: (params: { cursor?: string; limit: number }) => Promise<PostPaginated>;
    initialData: PostPaginated;
    limit?: number;
}

export function useInfiniteArticles({
    queryKey,
    queryFn,
    initialData,
    limit = 10,
}: InfiniteArticlesOptions) {

    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '0px 0px 100px 0px',
    });

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isError,
        error,
    } = useInfiniteQuery<PostPaginated>({
        queryKey,
        queryFn: async ({ pageParam: cursor }) => {

            return queryFn({ cursor: cursor as string | undefined, limit });
        },
        initialPageParam: undefined,
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        initialData: { pages: [initialData], pageParams: [undefined] },
    });

    useEffect(() => {

        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

    const articles = data?.pages.flatMap((page) => page.content) ?? [];

    return {
        articles,
        ref,
        hasNextPage,
        isFetchingNextPage,
        isError,
        error,
    };
}