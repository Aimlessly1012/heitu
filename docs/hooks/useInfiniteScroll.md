---
group:
  title: Element
  order: 2

toc: content
order: 4
---

# useInfiniteScroll

## 描述

无线滚动 hook

## 演示


```tsx
import React, { LegacyRef, useEffect } from 'react';
import { useInfiniteScroll, useInView } from 'heitu-hook';

function InfiniteScrollTrigger({ hasMore, loadMore }) {
  const [targetRef, inView] = useInView();
  useEffect(() => {
    if (inView && hasMore) loadMore?.();
  }, [hasMore, inView, loadMore]);
  return <div ref={targetRef}>{hasMore ? '加载中...' : '没有更多了~'}</div>;
}

export default () => {
  // mock接口获取的数据
  const dataSource = new Array(100).fill(1).map((item, index) => index);
  const { data, hasMore, loadMore } = useInfiniteScroll({
    dataSource, // 所有数据源
    pageSize: 10, // 一次性加载10条
    delay: 100, // 100ms延时
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '400px',
        overflowY: 'auto',
      }}
    >
      {data?.map((item) => {
        return <span>{item}</span>;
      })}
      <InfiniteScrollTrigger loadMore={loadMore} hasMore={hasMore} />
    </div>
  );
};
```

## Arguments

| name       | description | type                                  | default |
| ---------- | ----------- | ------------------------------------- | ------- |
| dataSource | 数据源      | any[]                                 | -       |
| delay      | 延迟        | number                                | 100     |
| pageSize   | 每页的个数  | number                                | 10      |
| fetchData  | 请求接口    | Promise<{total?: number; list?: T[]}> | -       |

## return

| name     | description        | type                                        | default |
| -------- | ------------------ | ------------------------------------------- | ------- |
| data     | 数据               | any[]                                       | -       |
| setData  | 操作 data          | React.Dispatch<React.SetStateAction<any[]>> | -       |
| loading  | 加载状态           | boolean                                     | false   |
| hasMore  | 是否还有更多数据   | boolean                                     | true    |
| loadMore | 加载更多数据的函数 | Promise<void>                               | -       |
