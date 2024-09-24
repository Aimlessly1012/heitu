---
group:
  title: effect
  order: 5

toc: content
order: 3
---

# useAsyncFn

## 描述

依赖项使用深度比较而不是引用相等

## 演示

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { useAsyncFn } from 'heitu';

export default () => {
  const [{ loading, value }, fn] = useAsyncFn(async () => {
    const res = await new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(200);
      }, 5000);
    });
    return res;
  }, []);
  console.log(loading, value);
  return (
    <div>
      <button
        onClick={() => {
          fn();
        }}
      >
        get
      </button>
      {loading && 'loading'} <br />
      {`data: ${value ? value : ''}`}
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
