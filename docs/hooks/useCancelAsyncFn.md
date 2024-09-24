---
group:
  title: Request
  order: 3

toc: content
order: 3
---

# useCancelAsyncFn

## 描述

取消前一个异步请求的 hook,可以用于下搜索拉列表

## 演示

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { useCancelAsyncFn, useHtAxios } from 'heitu';

export default () => {
  // 1. 创建 AbortController 实例
  const controller = useRef<AbortController>();
  const htAxios = useHtAxios({
    config: { timeout: 10000 },
    requestInterceptorsCallBack: (config) => {
      return config;
    },
    responseInterceptorsCallBack: (response) => {
      return response.data;
    },
  });
  const [{ value, loading }, fn] = useCancelAsyncFn(
    async ({ cancelInterceptor }) => {
      return async (query: string) => {
        const res = await htAxios
          .get(`http://jsonplaceholder.typicode.com/posts`)
          .catch((err) => {
            console.log(err);
          });
        cancelInterceptor();
        return res;
      };
    },
    [],
  );

  return (
    <div>
      <button
        onClick={async () => {
          fn();
        }}
      >
        12312
      </button>
    </div>
  );
};
```

## Arguments

| name         | description | type                    | default |
| ------------ | ----------- | ----------------------- | ------- |
| fn           | 执行的函数  | (...args: any[]) => any | -       |
| deps         | 依赖项      | any[]                   | -       |
| initialState | 初始值      | -                       | -       |

## return

| name  | description | type                  | default |
| ----- | ----------- | --------------------- | ------- |
| state | 返回值      | {error,loading,value} | -       |
| fn    | 执行函数    | （any）=>void         | -       |
