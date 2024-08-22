/// <reference types="react" />
interface UseInfiniteScrollProps<T> {
    dataSource?: T[];
    delay?: number;
    pageSize?: number;
    fetchData?: (params: {
        pageSize: number;
        pageNum: number;
    }) => Promise<{
        total?: number;
        list?: T[];
    }>;
}
/**
 * 无限滚动 Hook
 * @param param
 * @returns
 */
export default function useInfiniteScroll<T = any>({ dataSource, delay, pageSize, fetchData, }: UseInfiniteScrollProps<T>): {
    data: T[];
    setData: import("react").Dispatch<import("react").SetStateAction<T[]>>;
    loading: boolean;
    hasMore: boolean;
    loadMore: () => Promise<void>;
};
export {};
