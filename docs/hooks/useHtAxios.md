---
group:
  title: Request
  order: 3

toc: content
order: 1
---
# useHtAxios

## 描述

useHtAxios

- 基于 axios 封装的请求 hook
- 增加 axios 默认配置
- 支持额外配置 axios 通用配置
- 支持额外配置 axios 拦截请求
- 支持额外配置 axios 拦截响应

## 演示

```tsx
import { useHtAxios } from 'heitu';
import React from 'react';
export default () => {
  const htAxios = useHtAxios({
    config: { timeout: 3000 },
    requestInterceptorsCallBack: (config) => {
      return config;
    },
    responseInterceptorsCallBack: (response) => {
      return response.data;
    },
  });

  const getInfo = async () => {
    const res = await htAxios.get('http://jsonplaceholder.typicode.com/posts', {
      aa: '23123',
    });
    console.log(res);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <button
        type="button"
        style={{ width: '50px' }}
        onClick={() => {
          getInfo();
        }}
      >
        123
      </button>
    </div>
  );
};
```

## Arguments

| name | description | type | default |
| ---- | ----------- | ---- | ------- |

## return

| name | description | type | default |
| ---- | ----------- | ---- | ------- |
