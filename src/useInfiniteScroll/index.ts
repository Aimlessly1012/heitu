import { useState } from 'react';

interface UseInfiniteScrollProps<T> {
  dataSource?: T[]; // 数据源
  delay?: number; // 延迟加载时间
  pageSize?: number; // 每页数据项数量
  fetchData?: (params: { pageSize: number; pageNum: number }) => Promise<{
    total?: number; // 总数据数
    list?: T[]; // 当前页的数据列表
  }>;
}

/**
 * 无限滚动 Hook
 * @param param
 * @returns
 */
export default function useInfiniteScroll<T = any>({
  dataSource,
  delay = 100,
  pageSize = 10,
  fetchData,
}: UseInfiniteScrollProps<T>) {
  const [loading, setLoading] = useState<boolean>(false); // 加载状态
  const [hasMore, setHasMore] = useState<boolean>(true); // 是否还有更多数据
  const [data, setData] = useState<T[]>([]); // 当前已加载的数据列表

  async function loadMore() {
    // 如果数据源为空且没有提供加载数据的函数，直接返回
    if (!dataSource?.length && !fetchData) return;
    // 如果没有更多数据或正在加载，直接返回
    if (!hasMore || loading) return;

    setLoading(true);

    if (dataSource) {
      // 从数据源中加载更多数据
      await new Promise<T[]>((resolve) => {
        setTimeout(() => {
          resolve(dataSource?.slice(data.length, data.length + pageSize));
        }, delay);
      }).then((list) => {
        setHasMore(data?.length + list?.length < dataSource?.length);
        setData((value) => value?.concat(list as T[]));
      });
    } else {
      // 通过 fetchData 函数加载更多数据
      await fetchData?.({
        pageNum: data?.length ? Math.ceil(data?.length / pageSize) + 1 : 1,
        pageSize,
      }).then(({ list = [], total = 0 }) => {
        setHasMore(data?.length + list?.length < total && list?.length > 0);
        setData((value) => value?.concat(list));
      });
    }

    setLoading(false);
  }

  return {
    data, // 当前已加载的数据
    setData, // 操作data
    loading, // 加载状态
    hasMore, // 是否还有更多数据
    loadMore, // 加载更多数据的函数
  };
}
