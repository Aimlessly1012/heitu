---
group:
  title: effect
  order: 5

toc: content
order: 4
---

# usePolling

## 描述

一个用于处理轮询请求的 Hook，支持定时轮询、错误重试、手动控制等功能。

## 特性

- 支持自动/手动控制轮询
- 可配置轮询间隔时间
- 内置错误重试机制
- 提供完整的状态管理
- 支持成功/失败回调
- 自动清理资源

## 演示

### 基础用法

```tsx
import React from 'react';
import { usePolling } from 'heitu';
import Mock from 'mockjs';

export default () => {
  const getUsername = () => {
    console.log('polling getUsername');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Mock.mock('@name'));
      }, 1000);
    });
  };
  const { data, loading, error, start, stop, state } = usePolling(
    async () => {
      const res = await getUsername();
      return res;
    },
    {
      interval: 5000, // 每5秒轮询一次
      onSuccess: (data) => {
        console.log('轮询成功:', data);
      },
      onError: (error) => {
        console.log('轮询失败:', error);
      },
    },
  );
  console.log(state, 'state');
  return (
    <div>
      {state === 1 && <span>轮询中...</span>}
      {loading && <span>加载中...</span>}
      {error && <span>错误: {error.message}</span>}
      <div>数据: {JSON.stringify(data)}</div>
      <button onClick={start}>开始轮询</button>
      <button onClick={stop}>停止轮询</button>
    </div>
  );
};
```

## API

### Options

| 参数          | 说明             | 类型                     | 默认值 |
| ------------- | ---------------- | ------------------------ | ------ |
| interval      | 轮询间隔时间(ms) | `number`                 | 3000   |
| manual        | 是否手动控制轮询 | `boolean`                | false  |
| retryTimes    | 失败重试次数     | `number`                 | 3      |
| retryInterval | 重试间隔时间(ms) | `number`                 | 1000   |
| onSuccess     | 成功回调         | `(data: T) => void`      | -      |
| onError       | 失败回调         | `(error: Error) => void` | -      |

### 返回值

| 参数    | 说明           | 类型                 |
| ------- | -------------- | -------------------- |
| data    | 轮询返回的数据 | `T \| undefined`     |
| loading | 加载状态       | `boolean`            |
| error   | 错误信息       | `Error \| undefined` |
| start   | 开始轮询       | `() => void`         |
| stop    | 停止轮询       | `() => void`         |
