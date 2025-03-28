---
group:
  title: Request
  order: 3

toc: content
order: 3
---

# useCancelAsyncFn

## 描述

- 一个用于管理可取消异步请求的 Hook，特别适用于搜索、列表加载等需要取消前一个请求的场景。

- 调试请将 network 改为 slow 4G

## 特性

- 自动取消前一个未完成的请求
- 支持 AbortController 取消机制
- 适配 axios 请求
- 防止竞态条件
- 自动管理加载状态

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
  const [{ loading, value }, fetch] = useCancelAsyncFn(
    async ({ signal, cancelInterceptor }) => {
      const response = await await htAxios.get(
        'http://jsonplaceholder.typicode.com/posts',
        { aa: 1 },
        { signal },
      );
      const data = response;
      return data;
    },
    [],
  );

  return (
    <div>
      <button
        onClick={async () => {
          fetch();
        }}
      >
        获取列表
      </button>
    </div>
  );
};
```

## API

### 参数

| 参数         | 说明                                          | 类型                                                         | 默认值               |
| ------------ | --------------------------------------------- | ------------------------------------------------------------ | -------------------- |
| fn           | 异步函数，接收 cancelInterceptor 用于取消请求 | `(context: { cancelInterceptor: () => void }) => Promise<T>` | -                    |
| deps         | 依赖数组                                      | `any[]`                                                      | `[]`                 |
| initialState | 初始状态                                      | `{ loading?: boolean; error?: Error; value?: T }`            | `{ loading: false }` |

### 返回值

| 参数    | 说明         | 类型                                             |
| ------- | ------------ | ------------------------------------------------ |
| state   | 异步操作状态 | `{ loading: boolean; error?: Error; value?: T }` |
| execute | 执行异步函数 | `() => Promise<T>`                               |

### State 状态

| 字段    | 说明         | 类型                 |
| ------- | ------------ | -------------------- |
| loading | 是否正在加载 | `boolean`            |
| error   | 错误信息     | `Error \| undefined` |
| value   | 请求结果     | `T \| undefined`     |
