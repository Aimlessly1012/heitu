---
group:
  title: effect
  order: 5

toc: content
order: 3
---

# useAsyncFn

## 描述

用于处理异步函数的 Hook，具有以下特性：

- 自动处理异步状态（loading、error、value）
- 使用深度比较进行依赖项比较
- 支持取消和重试机制
- 自动处理竞态条件

## 演示

### 基础用法

```tsx
import React from 'react';
import { useAsyncFn } from 'heitu';

export default () => {
  const [state, execute] = useAsyncFn(async () => {
    const res = await new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(200);
      }, 1000);
    });
    return res;
  }, []);

  const { loading, error, value } = state;

  return (
    <div>
      <button onClick={execute} disabled={loading}>
        {loading ? '加载中...' : '获取数据'}
      </button>
      {error && <div style={{ color: 'red' }}>错误：{error.message}</div>}
      {value && <div>结果：{value}</div>}
    </div>
  );
};
```

### 带参数调用

```tsx
import { useAsyncFn } from 'heitu';

export default () => {
  const [state, fetchUser] = useAsyncFn(async (userId: string) => {
    const res = await new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(userId);
      }, 1000);
    });
    return res;
  }, []);

  return (
    <div>
      <button onClick={() => fetchUser('123')}>获取用户信息</button>
      {state.loading && <span>加载中...</span>}
      {state.value && <div>用户名：{state.value}</div>}
    </div>
  );
};
```

## API

### Params

| 参数         | 说明                     | 类型                                                | 默认值               |
| ------------ | ------------------------ | --------------------------------------------------- | -------------------- |
| fn           | 要执行的异步函数         | `(...args: any[]) => Promise<any>`                  | -                    |
| deps         | 依赖数组（使用深度比较） | `any[]`                                             | `[]`                 |
| initialState | 初始状态                 | `{ loading?: boolean; error?: Error; value?: any }` | `{ loading: false }` |

### Result

| 参数    | 说明                 | 类型                                               |
| ------- | -------------------- | -------------------------------------------------- |
| state   | 异步操作的状态       | `{ loading: boolean; error?: Error; value?: any }` |
| execute | 执行异步函数的触发器 | `(...args: Parameters<typeof fn>) => Promise<any>` |

### State 说明

| 字段    | 说明           | 类型                 |
| ------- | -------------- | -------------------- |
| loading | 是否正在加载   | `boolean`            |
| error   | 错误信息       | `Error \| undefined` |
| value   | 异步操作的结果 | `any`                |
